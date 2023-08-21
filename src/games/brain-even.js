#!/usr/bin/env node
// src/games/brain-even.js
import { playGame, greetPlayer } from '../utils/gameUtils.js';
import generateQuestionAndAnswer from '../utils/evenGameUtils.js';

const playEvenGame = () => {
  const introMessage = 'Answer "yes" if the number is even, otherwise answer "no".';
  const playerName = greetPlayer();
  playGame(introMessage, generateQuestionAndAnswer, playerName);
};

export default playEvenGame;
