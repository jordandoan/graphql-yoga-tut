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
  console.log('hi')
  return await context.prisma.link({ id: parent.id }).comments()
  // return await context.prisma.link({ id: parent.id }).comments({where: {reply_to: null}})
}
module.exports = {
    postedBy,
    votes,
    count,
    comments
}