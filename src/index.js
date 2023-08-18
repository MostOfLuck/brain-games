#!/usr/bin/env node
import greetPlayer from '../utils.js';

const runGame = (gameFunction) => {
  const playerName = greetPlayer();
  gameFunction(playerName);
};

export default runGame;
