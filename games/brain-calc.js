#!/usr/bin/env node
import { playGame, checkCalcAnswer } from '../gameUtils.js';
import generateQuestionAndAnswer from '../calcUtils.js';

playGame(
  'What is the result of the expression?',
  generateQuestionAndAnswer,
  checkCalcAnswer,
);
