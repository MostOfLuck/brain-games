// src/utils/utils.js
import readlineSync from 'readline-sync';

const greetPlayer = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
};
export default greetPlayer;
