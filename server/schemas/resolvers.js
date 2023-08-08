const { AuthenticationError } = require("apollo-server-express");
const { User, Game } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("games");
    },
    games: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Game.find(params).sort({ createdAt: -1 });
    },
    game: async (parent, { gameId }) => {
      return Game.findOne({ _id: gameId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("games");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },

//tried to add a resolver for saving the game, hope this helps even a tiny bit

    saveGame: async (parent, { scoreCardData }) => {
      try {
        console.log(gameData);
        const newGame = new Game({ gameData: scoreCardData });
        const savedGame = await newGame.save();
        return savedGame;
      } catch (error) {
        console.error("Error creating game:", error);
        throw error;
      }
    },

    addGame: async (parent, { gameData }, context) => {
      console.log(gameData);
      if (context.user) {
        const game = await Game.create({
          gameData,
        });
      

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { game: game._id } }
        );

        return game;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeGame: async (parent, { gameId }, context) => {
      if (context.user) {
        const game = await Game.findOneAndDelete({
          _id: gameId,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { game: game._id } }
        );

        return game;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
