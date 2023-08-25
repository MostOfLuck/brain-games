#!/usr/bin/env node
// src/games/brain-gcd.js
import { playGame, greetPlayer } from '../utils/gameUtils.js';
import { generateRandomNumber } from '../utils/utils.js';

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

const generateGCDQuestion = () => {
  const number1 = generateRandomNumber(1, 100);
  const number2 = generateRandomNumber(1, 100);
  const question = `${number1} ${number2}`;
  const correctAnswer = String(getGCD(number1, number2));

  return { question, correctAnswer };
};

const playGcdGame = () => {
  const gcdQuestionText = 'Find the greatest common divisor of given numbers.';
  const playerName = greetPlayer();
  playGame(gcdQuestionText, generateGCDQuestion, playerName);
};

export default playGcdGame;
