import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      games {
        _id
        gameData
        createdAt
      }
    }
  }
`;

export const QUERY_GAMES = gql`
  query getGames {
    games {
      _id
      gameData
      createdAt
    }
  }
`;

export const QUERY_SINGLE_GAME = gql`
  query getSingleGame($gameId: ID!) {
    game(gameId: $gameId) {
      _id
      gameData
      createdAt
    }
  }
`;


export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;

// add the games to the me query once they are setup

// games {
//   id
//   gameData
//   createdAt
// }