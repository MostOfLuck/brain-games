#!/usr/bin/env node
// brain calc
import { playGame, checkCalcAnswer } from '../src/utils/gameUtils.js';
import generateQuestionAndAnswer from '../src/utils/calcUtils.js';

playGame(
  'What is the result of the expression?',
  generateQuestionAndAnswer,
  checkCalcAnswer,
);
