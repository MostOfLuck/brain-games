#!/usr/bin/env node
// src/games/brain-even.js
import playGame from '../utils/gameUtils.js';
import generateQuestionAndAnswer from '../utils/evenGameUtils.js';
import greetPlayer from '../utils/utils.js';

const playEvenGame = () => {
  const playerName = greetPlayer();
  const introMessage = 'Answer "yes" if the number is even, otherwise answer "no".';
  playGame(introMessage, generateQuestionAndAnswer, playerName);
};

export default playEvenGame;
