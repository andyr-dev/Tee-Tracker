import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_GAME = gql`
mutation addGame($gameData: [GameDataInput]) {
  addGame(gameData: $gameData) {
    _id
    createdAt
  }
}
`;

export const SAVE_GAME = gql`
  mutation saveGame($scoreCardData: [GameDataInput!]!) {
    createGame(scoreCardData: $scoreCardData) {
      gameData
    }
  }
`;


//created a save_game mutation, we likely need to change the parameters being passed