const { Schema, model } = require('mongoose');

const {formatDate} = require('../utils/helpers');


//added a schema and referenced it in the game so we can store the array of objects

const gameDataSchema = new Schema({
  hole: Number,
  par: Number,
  GIR: Boolean,
  FIR: Boolean,
  putts: Number,
  scoreToPar: Number,
});

const gameSchema = new Schema({
  gameData: [gameDataSchema],

  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => formatDate(timestamp),
  },
  
    },
);

const Game = model('Game', gameSchema);

module.exports = Game;
