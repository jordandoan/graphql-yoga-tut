function replies(parent, args, context, info) {
  return context.prisma.comment({id: parent.id}).replies()
}

function user(parent, args, context, info) {
  return context.prisma.comment({ id: parent.id }).user()
}
function reply_to(parent, args, context, info) {
  return context.prisma.comment({ id: parent.id }).reply_to()
}
module.exports = {
  replies,
  user,
  reply_to
}