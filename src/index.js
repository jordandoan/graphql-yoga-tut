const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const Link = require('./resolvers/Link')
const Subscription = require('./resolvers/Subscription')
const Vote = require('./resolvers/Vote')

const resolvers = {
  Query,
  Mutation,
  User,
  Link,
  Subscription,
  Vote,
    // updateLink: (parent, args) => {
    //   let found = links.findIndex(link => link.id == args.id);
    //   if (found != -1) {
    //     links[found] = args;
    //     return args
    //   } else {
    //     return null
    //   }
    // },

    // deleteLink: (parent, args) => {
    //   let linkIndex = links.findIndex(link => link.id == args.id);
    //   if (linkIndex != -1) {
    //     let link = links[linkIndex];
    //     links.splice(linkIndex, 1)
    //     return link
    //   }
    //   return null
    // }
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: request => {
    return  { 
      ...request,
      prisma,
    }
  },
})

server.start(() => console.log('Server is running on http://localhost:4000'));