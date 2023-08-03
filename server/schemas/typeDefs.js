const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    games: [Game]!
  }

  type Game {
    _id: ID
    gameData: Object
    createdAt: String
  }


  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user(username: String!): User
    games(username: String): [Game]
    game(gameId: ID!): Game
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addGame(gameData: String!): Game
    removeGame(gameId: ID!): Game
  }
`;

module.exports = typeDefs;