#!/usr/bin/env node
// src/games/brain-calc.js
import playGame from '../utils/gameUtils.js';
import generateQuestionAndAnswer from '../utils/calcUtils.js';
import greetPlayer from '../utils/utils.js';

const playCalcGame = () => {
  const playerName = greetPlayer();
  const introMessage = 'What is the result of the expression?';
  playGame(introMessage, generateQuestionAndAnswer, playerName);
};

export default playCalcGame;
