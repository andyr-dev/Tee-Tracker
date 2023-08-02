const { User, Game } = require('../models');

const resolvers = {
    Query: {
        user: async () => {
            return User.find({});
        },
        game: async (parent, { _id}) => {
            const params = _id? { _id } : {};
            return Game.find(params);
        },
    },

    Mutation: {
        createUser: async (parent, args) => {
           const user = await User.create(args);
           return User;  
        },
        createGame: async (parent, )
    }

}