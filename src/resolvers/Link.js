function postedBy(parent, args, context) {
    return context.prisma.link({ id: parent.id }).postedBy()
}

function votes(parent, args, context) {
  return context.prisma.link({ id: parent.id }).votes()
}

async function count(parent, args, context) {
  return await context.prisma.votesConnection({where: {link: {id:parent.id}}}).aggregate().count();
}

async function comments(parent, args, context) {
  return await context.prisma.link({ id: parent.id }).comments({where: {reply_to: null}})
}

function comment_count(parent, args, context) {
  return context.prisma.commentsConnection({where: {link: {id: parent.id }}}).aggregate().count()
}

module.exports = {
    postedBy,
    votes,
    count,
    comments,
    comment_count
}