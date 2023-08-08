const { Schema, model } = require('mongoose');

const {formatDate} = require('../utils/helpers');


//added a schema and referenced it in the game so we can store the array of objects

const gameSchema = new Schema({
  gameData: [
  {
    hole: {
      type: Number,
      required: true,
    },
    par: {
      type: Number,
      required: true,
    },
    GIR: {
      type: Boolean,
    },
    FIR: {
      type: Boolean,
    },
    putts: {
    type: Number,
    },
    scoreToPar: {
      type: Number,
    },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => formatDate(timestamp),
  }

    }]
}
);
  

const Game = model('Game', gameSchema);

module.exports = Game;
