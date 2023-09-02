#!/usr/bin/env node
import { playGame, greetPlayer } from '../index.js';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const playPrimeGame = () => {
  greetPlayer();
  const primeQuestionText = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const generateQuestionAndAnswer = () => {
    const number = Math.floor(Math.random() * 100) + 1;
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    const question = `Question: ${number}`;
    return { question, correctAnswer };
  };

  playGame(primeQuestionText, generateQuestionAndAnswer);
};

export default playPrimeGame;
