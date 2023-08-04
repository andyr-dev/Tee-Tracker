const db = require('../config/connection');
const { Game } = require('../models');
const gameData = require('./gameData.js');

db.once('open', async () => {
  try {
    await Game.deleteMany({});
    await Game.create(gameData);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});