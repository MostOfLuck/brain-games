#!/usr/bin/env node
import { playGame } from '../index.js';
import generateRandomNumber from '../utils/generateRandomNumber.js';

const isEven = (number) => number % 2 === 0;

const playEvenGame = () => {
  const introMessage = 'Answer "yes" if the number is even, otherwise answer "no".';

  const generateQuestionAndAnswer = () => {
    const question = generateRandomNumber(1, 100);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    return { question, correctAnswer };
  };

  playGame(introMessage, generateQuestionAndAnswer);
};

export default playEvenGame;
