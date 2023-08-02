const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
  }

  type Game {
    _id: ID!
    name: String!
  }

  type Query {
    user: [User]
    game: (_id: String): [Game]
  }

  type Mutation {
    createUser(name: String!): User
    createGame(_id: String!, name: String): Game
  }
`;

module.exports = typeDefs;