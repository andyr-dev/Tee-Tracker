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
query Me {
  me {
    _id
    email
    games {
      gameData {
        FIR
        GIR
        hole
        par
        putts
        scoreToPar
      }
      createdAt
      _id
    }
    username
  }
}`


