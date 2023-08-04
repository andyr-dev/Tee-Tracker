const { Schema, model } = require('mongoose');
const {formatDate} = require('../utils/helpers');

const gameSchema = new Schema({
  gameData: 
    {
        hole: Number,
        par: Number,
        GIR: Boolean,
        FIR: Boolean,
        putts: Number,
        scoreToPar: Number
    },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  
    },
);

const Game = model('Game', gameSchema);

module.exports = Game;
