#!/usr/bin/env node
import readlineSync from 'readline-sync';

const greetPlayer = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
};

const runGame = (gameFunction) => {
  const playerName = greetPlayer();
  gameFunction(playerName);
};

export default runGame;
