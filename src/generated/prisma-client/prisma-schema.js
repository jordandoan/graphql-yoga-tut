module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateComment {
  count: Int!
}

type AggregateLink {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateVote {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Comment {
  id: ID!
  link: Link!
  user: User!
  reply_to: Comment
  text: String!
  replies(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment!]
}

type CommentConnection {
  pageInfo: PageInfo!
  edges: [CommentEdge]!
  aggregate: AggregateComment!
}

input CommentCreateInput {
  id: ID
  link: LinkCreateOneWithoutCommentsInput!
  user: UserCreateOneInput!
  reply_to: CommentCreateOneWithoutRepliesInput
  text: String!
  replies: CommentCreateManyWithoutReply_toInput
}

input CommentCreateManyWithoutLinkInput {
  create: [CommentCreateWithoutLinkInput!]
  connect: [CommentWhereUniqueInput!]
}

input CommentCreateManyWithoutReply_toInput {
  create: [CommentCreateWithoutReply_toInput!]
  connect: [CommentWhereUniqueInput!]
}

input CommentCreateOneWithoutRepliesInput {
  create: CommentCreateWithoutRepliesInput
  connect: CommentWhereUniqueInput
}

input CommentCreateWithoutLinkInput {
  id: ID
  user: UserCreateOneInput!
  reply_to: CommentCreateOneWithoutRepliesInput
  text: String!
  replies: CommentCreateManyWithoutReply_toInput
}

input CommentCreateWithoutRepliesInput {
  id: ID
  link: LinkCreateOneWithoutCommentsInput!
  user: UserCreateOneInput!
  reply_to: CommentCreateOneWithoutRepliesInput
  text: String!
}

input CommentCreateWithoutReply_toInput {
  id: ID
  link: LinkCreateOneWithoutCommentsInput!
  user: UserCreateOneInput!
  text: String!
  replies: CommentCreateManyWithoutReply_toInput
}

type CommentEdge {
  node: Comment!
  cursor: String!
}

enum CommentOrderByInput {
  id_ASC
  id_DESC
  text_ASC
  text_DESC
}

type CommentPreviousValues {
  id: ID!
  text: String!
}

input CommentScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  AND: [CommentScalarWhereInput!]
  OR: [CommentScalarWhereInput!]
  NOT: [CommentScalarWhereInput!]
}

type CommentSubscriptionPayload {
  mutation: MutationType!
  node: Comment
  updatedFields: [String!]
  previousValues: CommentPreviousValues
}

input CommentSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CommentWhereInput
  AND: [CommentSubscriptionWhereInput!]
  OR: [CommentSubscriptionWhereInput!]
  NOT: [CommentSubscriptionWhereInput!]
}

input CommentUpdateInput {
  link: LinkUpdateOneRequiredWithoutCommentsInput
  user: UserUpdateOneRequiredInput
  reply_to: CommentUpdateOneWithoutRepliesInput
  text: String
  replies: CommentUpdateManyWithoutReply_toInput
}

input CommentUpdateManyDataInput {
  text: String
}

input CommentUpdateManyMutationInput {
  text: String
}

input CommentUpdateManyWithoutLinkInput {
  create: [CommentCreateWithoutLinkInput!]
  delete: [CommentWhereUniqueInput!]
  connect: [CommentWhereUniqueInput!]
  set: [CommentWhereUniqueInput!]
  disconnect: [CommentWhereUniqueInput!]
  update: [CommentUpdateWithWhereUniqueWithoutLinkInput!]
  upsert: [CommentUpsertWithWhereUniqueWithoutLinkInput!]
  deleteMany: [CommentScalarWhereInput!]
  updateMany: [CommentUpdateManyWithWhereNestedInput!]
}

input CommentUpdateManyWithoutReply_toInput {
  create: [CommentCreateWithoutReply_toInput!]
  delete: [CommentWhereUniqueInput!]
  connect: [CommentWhereUniqueInput!]
  set: [CommentWhereUniqueInput!]
  disconnect: [CommentWhereUniqueInput!]
  update: [CommentUpdateWithWhereUniqueWithoutReply_toInput!]
  upsert: [CommentUpsertWithWhereUniqueWithoutReply_toInput!]
  deleteMany: [CommentScalarWhereInput!]
  updateMany: [CommentUpdateManyWithWhereNestedInput!]
}

input CommentUpdateManyWithWhereNestedInput {
  where: CommentScalarWhereInput!
  data: CommentUpdateManyDataInput!
}

input CommentUpdateOneWithoutRepliesInput {
  create: CommentCreateWithoutRepliesInput
  update: CommentUpdateWithoutRepliesDataInput
  upsert: CommentUpsertWithoutRepliesInput
  delete: Boolean
  disconnect: Boolean
  connect: CommentWhereUniqueInput
}

input CommentUpdateWithoutLinkDataInput {
  user: UserUpdateOneRequiredInput
  reply_to: CommentUpdateOneWithoutRepliesInput
  text: String
  replies: CommentUpdateManyWithoutReply_toInput
}

input CommentUpdateWithoutRepliesDataInput {
  link: LinkUpdateOneRequiredWithoutCommentsInput
  user: UserUpdateOneRequiredInput
  reply_to: CommentUpdateOneWithoutRepliesInput
  text: String
}

input CommentUpdateWithoutReply_toDataInput {
  link: LinkUpdateOneRequiredWithoutCommentsInput
  user: UserUpdateOneRequiredInput
  text: String
  replies: CommentUpdateManyWithoutReply_toInput
}

input CommentUpdateWithWhereUniqueWithoutLinkInput {
  where: CommentWhereUniqueInput!
  data: CommentUpdateWithoutLinkDataInput!
}

input CommentUpdateWithWhereUniqueWithoutReply_toInput {
  where: CommentWhereUniqueInput!
  data: CommentUpdateWithoutReply_toDataInput!
}

input CommentUpsertWithoutRepliesInput {
  update: CommentUpdateWithoutRepliesDataInput!
  create: CommentCreateWithoutRepliesInput!
}

input CommentUpsertWithWhereUniqueWithoutLinkInput {
  where: CommentWhereUniqueInput!
  update: CommentUpdateWithoutLinkDataInput!
  create: CommentCreateWithoutLinkInput!
}

input CommentUpsertWithWhereUniqueWithoutReply_toInput {
  where: CommentWhereUniqueInput!
  update: CommentUpdateWithoutReply_toDataInput!
  create: CommentCreateWithoutReply_toInput!
}

input CommentWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  link: LinkWhereInput
  user: UserWhereInput
  reply_to: CommentWhereInput
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  replies_every: CommentWhereInput
  replies_some: CommentWhereInput
  replies_none: CommentWhereInput
  AND: [CommentWhereInput!]
  OR: [CommentWhereInput!]
  NOT: [CommentWhereInput!]
}

input CommentWhereUniqueInput {
  id: ID
}

scalar DateTime

type Link {
  id: ID!
  createdAt: DateTime!
  description: String!
  url: String!
  postedBy: User
  votes(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vote!]
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment!]
}

type LinkConnection {
  pageInfo: PageInfo!
  edges: [LinkEdge]!
  aggregate: AggregateLink!
}

input LinkCreateInput {
  id: ID
  description: String!
  url: String!
  postedBy: UserCreateOneWithoutLinksInput
  votes: VoteCreateManyWithoutLinkInput
  comments: CommentCreateManyWithoutLinkInput
}

input LinkCreateManyWithoutPostedByInput {
  create: [LinkCreateWithoutPostedByInput!]
  connect: [LinkWhereUniqueInput!]
}

input LinkCreateOneWithoutCommentsInput {
  create: LinkCreateWithoutCommentsInput
  connect: LinkWhereUniqueInput
}

input LinkCreateOneWithoutVotesInput {
  create: LinkCreateWithoutVotesInput
  connect: LinkWhereUniqueInput
}

input LinkCreateWithoutCommentsInput {
  id: ID
  description: String!
  url: String!
  postedBy: UserCreateOneWithoutLinksInput
  votes: VoteCreateManyWithoutLinkInput
}

input LinkCreateWithoutPostedByInput {
  id: ID
  description: String!
  url: String!
  votes: VoteCreateManyWithoutLinkInput
  comments: CommentCreateManyWithoutLinkInput
}

input LinkCreateWithoutVotesInput {
  id: ID
  description: String!
  url: String!
  postedBy: UserCreateOneWithoutLinksInput
  comments: CommentCreateManyWithoutLinkInput
}

type LinkEdge {
  node: Link!
  cursor: String!
}

enum LinkOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  description_ASC
  description_DESC
  url_ASC
  url_DESC
}

type LinkPreviousValues {
  id: ID!
  createdAt: DateTime!
  description: String!
  url: String!
}

input LinkScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  AND: [LinkScalarWhereInput!]
  OR: [LinkScalarWhereInput!]
  NOT: [LinkScalarWhereInput!]
}

type LinkSubscriptionPayload {
  mutation: MutationType!
  node: Link
  updatedFields: [String!]
  previousValues: LinkPreviousValues
}

input LinkSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LinkWhereInput
  AND: [LinkSubscriptionWhereInput!]
  OR: [LinkSubscriptionWhereInput!]
  NOT: [LinkSubscriptionWhereInput!]
}

input LinkUpdateInput {
  description: String
  url: String
  postedBy: UserUpdateOneWithoutLinksInput
  votes: VoteUpdateManyWithoutLinkInput
  comments: CommentUpdateManyWithoutLinkInput
}

input LinkUpdateManyDataInput {
  description: String
  url: String
}

input LinkUpdateManyMutationInput {
  description: String
  url: String
}

input LinkUpdateManyWithoutPostedByInput {
  create: [LinkCreateWithoutPostedByInput!]
  delete: [LinkWhereUniqueInput!]
  connect: [LinkWhereUniqueInput!]
  set: [LinkWhereUniqueInput!]
  disconnect: [LinkWhereUniqueInput!]
  update: [LinkUpdateWithWhereUniqueWithoutPostedByInput!]
  upsert: [LinkUpsertWithWhereUniqueWithoutPostedByInput!]
  deleteMany: [LinkScalarWhereInput!]
  updateMany: [LinkUpdateManyWithWhereNestedInput!]
}

input LinkUpdateManyWithWhereNestedInput {
  where: LinkScalarWhereInput!
  data: LinkUpdateManyDataInput!
}

input LinkUpdateOneRequiredWithoutCommentsInput {
  create: LinkCreateWithoutCommentsInput
  update: LinkUpdateWithoutCommentsDataInput
  upsert: LinkUpsertWithoutCommentsInput
  connect: LinkWhereUniqueInput
}

input LinkUpdateOneRequiredWithoutVotesInput {
  create: LinkCreateWithoutVotesInput
  update: LinkUpdateWithoutVotesDataInput
  upsert: LinkUpsertWithoutVotesInput
  connect: LinkWhereUniqueInput
}

input LinkUpdateWithoutCommentsDataInput {
  description: String
  url: String
  postedBy: UserUpdateOneWithoutLinksInput
  votes: VoteUpdateManyWithoutLinkInput
}

input LinkUpdateWithoutPostedByDataInput {
  description: String
  url: String
  votes: VoteUpdateManyWithoutLinkInput
  comments: CommentUpdateManyWithoutLinkInput
}

input LinkUpdateWithoutVotesDataInput {
  description: String
  url: String
  postedBy: UserUpdateOneWithoutLinksInput
  comments: CommentUpdateManyWithoutLinkInput
}

input LinkUpdateWithWhereUniqueWithoutPostedByInput {
  where: LinkWhereUniqueInput!
  data: LinkUpdateWithoutPostedByDataInput!
}

input LinkUpsertWithoutCommentsInput {
  update: LinkUpdateWithoutCommentsDataInput!
  create: LinkCreateWithoutCommentsInput!
}

input LinkUpsertWithoutVotesInput {
  update: LinkUpdateWithoutVotesDataInput!
  create: LinkCreateWithoutVotesInput!
}

input LinkUpsertWithWhereUniqueWithoutPostedByInput {
  where: LinkWhereUniqueInput!
  update: LinkUpdateWithoutPostedByDataInput!
  create: LinkCreateWithoutPostedByInput!
}

input LinkWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  postedBy: UserWhereInput
  votes_every: VoteWhereInput
  votes_some: VoteWhereInput
  votes_none: VoteWhereInput
  comments_every: CommentWhereInput
  comments_some: CommentWhereInput
  comments_none: CommentWhereInput
  AND: [LinkWhereInput!]
  OR: [LinkWhereInput!]
  NOT: [LinkWhereInput!]
}

input LinkWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createComment(data: CommentCreateInput!): Comment!
  updateComment(data: CommentUpdateInput!, where: CommentWhereUniqueInput!): Comment
  updateManyComments(data: CommentUpdateManyMutationInput!, where: CommentWhereInput): BatchPayload!
  upsertComment(where: CommentWhereUniqueInput!, create: CommentCreateInput!, update: CommentUpdateInput!): Comment!
  deleteComment(where: CommentWhereUniqueInput!): Comment
  deleteManyComments(where: CommentWhereInput): BatchPayload!
  createLink(data: LinkCreateInput!): Link!
  updateLink(data: LinkUpdateInput!, where: LinkWhereUniqueInput!): Link
  updateManyLinks(data: LinkUpdateManyMutationInput!, where: LinkWhereInput): BatchPayload!
  upsertLink(where: LinkWhereUniqueInput!, create: LinkCreateInput!, update: LinkUpdateInput!): Link!
  deleteLink(where: LinkWhereUniqueInput!): Link
  deleteManyLinks(where: LinkWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  createVote(data: VoteCreateInput!): Vote!
  updateVote(data: VoteUpdateInput!, where: VoteWhereUniqueInput!): Vote
  upsertVote(where: VoteWhereUniqueInput!, create: VoteCreateInput!, update: VoteUpdateInput!): Vote!
  deleteVote(where: VoteWhereUniqueInput!): Vote
  deleteManyVotes(where: VoteWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  comment(where: CommentWhereUniqueInput!): Comment
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment]!
  commentsConnection(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CommentConnection!
  link(where: LinkWhereUniqueInput!): Link
  links(where: LinkWhereInput, orderBy: LinkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Link]!
  linksConnection(where: LinkWhereInput, orderBy: LinkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LinkConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  vote(where: VoteWhereUniqueInput!): Vote
  votes(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vote]!
  votesConnection(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): VoteConnection!
  node(id: ID!): Node
}

type Subscription {
  comment(where: CommentSubscriptionWhereInput): CommentSubscriptionPayload
  link(where: LinkSubscriptionWhereInput): LinkSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  vote(where: VoteSubscriptionWhereInput): VoteSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  email: String!
  password: String!
  links(where: LinkWhereInput, orderBy: LinkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Link!]
  votes(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vote!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  email: String!
  password: String!
  links: LinkCreateManyWithoutPostedByInput
  votes: VoteCreateManyWithoutUserInput
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutLinksInput {
  create: UserCreateWithoutLinksInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutVotesInput {
  create: UserCreateWithoutVotesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutLinksInput {
  id: ID
  name: String!
  email: String!
  password: String!
  votes: VoteCreateManyWithoutUserInput
}

input UserCreateWithoutVotesInput {
  id: ID
  name: String!
  email: String!
  password: String!
  links: LinkCreateManyWithoutPostedByInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  name: String
  email: String
  password: String
  links: LinkUpdateManyWithoutPostedByInput
  votes: VoteUpdateManyWithoutUserInput
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  links: LinkUpdateManyWithoutPostedByInput
  votes: VoteUpdateManyWithoutUserInput
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  password: String
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutVotesInput {
  create: UserCreateWithoutVotesInput
  update: UserUpdateWithoutVotesDataInput
  upsert: UserUpsertWithoutVotesInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutLinksInput {
  create: UserCreateWithoutLinksInput
  update: UserUpdateWithoutLinksDataInput
  upsert: UserUpsertWithoutLinksInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutLinksDataInput {
  name: String
  email: String
  password: String
  votes: VoteUpdateManyWithoutUserInput
}

input UserUpdateWithoutVotesDataInput {
  name: String
  email: String
  password: String
  links: LinkUpdateManyWithoutPostedByInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutLinksInput {
  update: UserUpdateWithoutLinksDataInput!
  create: UserCreateWithoutLinksInput!
}

input UserUpsertWithoutVotesInput {
  update: UserUpdateWithoutVotesDataInput!
  create: UserCreateWithoutVotesInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  links_every: LinkWhereInput
  links_some: LinkWhereInput
  links_none: LinkWhereInput
  votes_every: VoteWhereInput
  votes_some: VoteWhereInput
  votes_none: VoteWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}

type Vote {
  id: ID!
  link: Link!
  user: User!
}

type VoteConnection {
  pageInfo: PageInfo!
  edges: [VoteEdge]!
  aggregate: AggregateVote!
}

input VoteCreateInput {
  id: ID
  link: LinkCreateOneWithoutVotesInput!
  user: UserCreateOneWithoutVotesInput!
}

input VoteCreateManyWithoutLinkInput {
  create: [VoteCreateWithoutLinkInput!]
  connect: [VoteWhereUniqueInput!]
}

input VoteCreateManyWithoutUserInput {
  create: [VoteCreateWithoutUserInput!]
  connect: [VoteWhereUniqueInput!]
}

input VoteCreateWithoutLinkInput {
  id: ID
  user: UserCreateOneWithoutVotesInput!
}

input VoteCreateWithoutUserInput {
  id: ID
  link: LinkCreateOneWithoutVotesInput!
}

type VoteEdge {
  node: Vote!
  cursor: String!
}

enum VoteOrderByInput {
  id_ASC
  id_DESC
}

type VotePreviousValues {
  id: ID!
}

input VoteScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  AND: [VoteScalarWhereInput!]
  OR: [VoteScalarWhereInput!]
  NOT: [VoteScalarWhereInput!]
}

type VoteSubscriptionPayload {
  mutation: MutationType!
  node: Vote
  updatedFields: [String!]
  previousValues: VotePreviousValues
}

input VoteSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: VoteWhereInput
  AND: [VoteSubscriptionWhereInput!]
  OR: [VoteSubscriptionWhereInput!]
  NOT: [VoteSubscriptionWhereInput!]
}

input VoteUpdateInput {
  link: LinkUpdateOneRequiredWithoutVotesInput
  user: UserUpdateOneRequiredWithoutVotesInput
}

input VoteUpdateManyWithoutLinkInput {
  create: [VoteCreateWithoutLinkInput!]
  delete: [VoteWhereUniqueInput!]
  connect: [VoteWhereUniqueInput!]
  set: [VoteWhereUniqueInput!]
  disconnect: [VoteWhereUniqueInput!]
  update: [VoteUpdateWithWhereUniqueWithoutLinkInput!]
  upsert: [VoteUpsertWithWhereUniqueWithoutLinkInput!]
  deleteMany: [VoteScalarWhereInput!]
}

input VoteUpdateManyWithoutUserInput {
  create: [VoteCreateWithoutUserInput!]
  delete: [VoteWhereUniqueInput!]
  connect: [VoteWhereUniqueInput!]
  set: [VoteWhereUniqueInput!]
  disconnect: [VoteWhereUniqueInput!]
  update: [VoteUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [VoteUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [VoteScalarWhereInput!]
}

input VoteUpdateWithoutLinkDataInput {
  user: UserUpdateOneRequiredWithoutVotesInput
}

input VoteUpdateWithoutUserDataInput {
  link: LinkUpdateOneRequiredWithoutVotesInput
}

input VoteUpdateWithWhereUniqueWithoutLinkInput {
  where: VoteWhereUniqueInput!
  data: VoteUpdateWithoutLinkDataInput!
}

input VoteUpdateWithWhereUniqueWithoutUserInput {
  where: VoteWhereUniqueInput!
  data: VoteUpdateWithoutUserDataInput!
}

input VoteUpsertWithWhereUniqueWithoutLinkInput {
  where: VoteWhereUniqueInput!
  update: VoteUpdateWithoutLinkDataInput!
  create: VoteCreateWithoutLinkInput!
}

input VoteUpsertWithWhereUniqueWithoutUserInput {
  where: VoteWhereUniqueInput!
  update: VoteUpdateWithoutUserDataInput!
  create: VoteCreateWithoutUserInput!
}

input VoteWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  link: LinkWhereInput
  user: UserWhereInput
  AND: [VoteWhereInput!]
  OR: [VoteWhereInput!]
  NOT: [VoteWhereInput!]
}

input VoteWhereUniqueInput {
  id: ID
}
`
      }
    