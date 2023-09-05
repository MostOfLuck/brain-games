#!/usr/bin/env node
import readlineSync from 'readline-sync';

const playBrainGames = () => {
  console.log('Welcome to the Brain Games!');

  const playerNameCli = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerNameCli}!`);
};

export default playBrainGames;
