#!/usr/bin/env node
import { playGame, checkProgressionAnswer } from '../src/utils/gameUtils.js';
import generateProgressionQuestion from '../src/utils/progressionGameUtils.js';

const progressionQuestionText = 'What number is missing in the progression?';
playGame(
  progressionQuestionText,
  generateProgressionQuestion,
  checkProgressionAnswer,
);
