#!/usr/bin/env node
// src/games/brain-even.js
import { playGame, greetPlayer } from '../utils/gameUtils.js';
import { generateRandomNumber } from '../index.js';

const isEven = (number) => number % 2 === 0;

const generateQuestionAndAnswer = () => {
  const question = generateRandomNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const playEvenGame = () => {
  const introMessage = 'Answer "yes" if the number is even, otherwise answer "no".';
  const playerName = greetPlayer();
  playGame(introMessage, generateQuestionAndAnswer, playerName);
};

export default playEvenGame;
