#!/usr/bin/env node
import readlineSync from 'readline-sync';

const greetPlayer = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
};

export const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const runGame = (gameFunction) => {
  const playerName = greetPlayer();
  gameFunction(playerName);
};

export default runGame;
