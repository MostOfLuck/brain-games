#!/usr/bin/env node
import { playGame, greetPlayer } from '../utils/gameUtils.js';
import generateQuestionAndAnswer from '../utils/calcUtils.js';

const playCalcGame = () => {
  const playerName = greetPlayer();
  const introMessage = 'What is the result of the expression?';
  playGame(introMessage, generateQuestionAndAnswer, playerName);
};

export default playCalcGame;
