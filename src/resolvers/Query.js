const { getUserId } = require("../utils")

async function feed(parent, args, context, info) {
  const where = args.filter ? {
    OR: [
      { description_contains: args.filter },
      { url_contains: args.filter },
    ],
  } : {}

  const links = await context.prisma.links({
    where,
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy
  })
  const count = await context.prisma
    .linksConnection({
      where,
    })
    .aggregate()
    .count()
    return {
      links,
      count,
    }
}

async function link(parent, args, context, info) {
  return await context.prisma.link({id: args.id})
}

async function me(parent, args, context, info) {
  const id = getUserId(context);
  return await context.prisma.user({id})
}

async function comments(parent, args, context, info) {
  return await context.prisma.comments()
}
module.exports = {
  feed,
  link,
  me,
  comments
}