#!/usr/bin/env node
import { playGame, greetPlayer } from '../utils/gameUtils.js';
import { generateRandomNumber } from '../index.js';

const getGCD = (num1, num2) => {
  let a = num1;
  let b = num2;

  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return a;
};

const playGcdGame = () => {
  greetPlayer();
  const gcdQuestionText = 'Find the greatest common divisor of given numbers.';

  const generateGCDQuestion = () => {
    const number1 = generateRandomNumber(1, 100);
    const number2 = generateRandomNumber(1, 100);
    const question = `${number1} ${number2}`;
    const correctAnswer = String(getGCD(number1, number2));

    return { question, correctAnswer };
  };

  playGame(gcdQuestionText, generateGCDQuestion);
};

export default playGcdGame;
