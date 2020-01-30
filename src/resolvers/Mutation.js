const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')

function checkFields(args) { 
  for (let key of Object.keys(args)) {
    if (!args[key]) {
      throw new Error('Invalid input');
    }
  }
}

async function signup(parent, args, context, info) {
  checkFields(args);
  const password = await bcrypt.hash(args.password, 10)
  const user = await context.prisma.createUser({ ...args, password })
  const token = jwt.sign({ userId: user.id}, APP_SECRET)
  return {
    token,
    user,
  }

}

async function login(parent, args, context, info) {
  // 1
  const user = await context.prisma.user({ email: args.email })
  if (!user) {
    throw new Error('No such user found')
  }

  // 2
  const valid = await bcrypt.compare(args.password, user.password)
  if (!valid) {
    throw new Error('Invalid password')
  }

  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  // 3
  return {
    token,
    user,
  }
}

function post(parent, args, context, info) {
  const userId = getUserId(context)
  checkFields(args);
  return context.prisma.createLink({
    url: args.url,
    description: args.description,
    postedBy: { connect: { id: userId } },
  })
}

async function updateLink(parent, args, context, info) {
  const userId = getUserId(context)
  const {id, description, url} = args;
  return await context.prisma.updateLink({
    data: {
      description,
      url,
    },
    where: {
      id,
    },
  })
  
}

async function deleteLink(parent, args, context, info) {
  const userId = getUserId(context)
  return context.prisma.deleteLink(
    {
      id: args.id
    },
     info
  );
}

async function vote(parent, args, context, info) {
  const userId = getUserId(context)
  const linkExists = await context.prisma.$exists.vote({
    user: { id: userId },
    link: { id: args.linkId },
  })
  if (linkExists) {
    throw new Error(`Already voted for link: ${args.linkId}`)
  }
  return context.prisma.createVote({
    user: { connect: { id: userId } },
    link: { connect: { id: args.linkId } },
  })
}

async function deleteVote(parent, args, context, info) {
  const userId = getUserId(context)
  const ids = await context.prisma.votes({
    where: {
      user: { id: userId },
      link: { id: args.linkId },
    }
  })
  let id = ids[0]
  return context.prisma.deleteVote(
    id, info
  ) 
}

async function createComment(parent, args, context, info) {
  const userId = getUserId(context)
  if (!args.reply_to) {
    return context.prisma.createComment({
      user: { connect: { id: userId }},
      link: { connect: { id: args.link }},
      text: args.text
    })
  } else {
    // const parentLink = await context.prisma.comment({id: args.reply_to});
    const comment = await context.prisma.createComment({
      user: { connect: { id: userId }},
      link: { connect: { id: args.link }},
      reply_to: { connect: { id: args.reply_to }},
      text: args.text
    });
    return comment
    // const newParent = await context.prisma.connect({})
  }
}

module.exports = {
  signup,
  login,
  post,
  vote,
  deleteVote,
  updateLink,
  deleteLink,
  createComment
}