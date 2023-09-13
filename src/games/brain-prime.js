#!/usr/bin/env node
import { playGame } from '../index.js';
import generateRandomNumber from '../utils/generateRandomNumber.js';

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
  const primeQuestionText = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const generateQuestionAndAnswer = () => {
    const number = generateRandomNumber(1, 100);
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    const question = `Question: ${number}`;
    return { question, correctAnswer };
  };

  playGame(primeQuestionText, generateQuestionAndAnswer);
};

export default playPrimeGame;
