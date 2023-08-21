#!/usr/bin/env node
import { playGame } from '../utils/gameUtils.js';
import { generateQuestionAndAnswer, checkProgressionAnswer } from '../utils/progressionGameUtils.js';

const progressionQuestionText = 'What number is missing in the progression?';
playGame(progressionQuestionText, generateQuestionAndAnswer, checkProgressionAnswer);
