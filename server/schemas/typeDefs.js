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
    gameData: [GameData]
    createdAt: String
  }

  type GameData {
    hole: Int
    par: Int
    GIR: Boolean
    FIR: Boolean
    putts: Int
    scoreToPar: Int
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

  input GameDataInput {
    hole: Int
    par: Int
    GIR: Boolean
    FIR: Boolean
    putts: Int
    scoreToPar: Int
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addGame(gameData: [GameDataInput]): Game
    removeGame(gameId: ID!): Game
    saveGame(scoreCardData: [GameDataInput!]!): Game
  }

`;
// added the saveGame mutation to store the information and found the input type but I cant figure out
//how to pass it in 
module.exports = typeDefs;