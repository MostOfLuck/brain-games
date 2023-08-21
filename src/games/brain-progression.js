#!/usr/bin/env node
import { playGame, checkCalcAnswer } from '../gameUtils.js';
import generateQuestionAndAnswer from '../progressionGameUtils.js';

const progressionQuestionText = 'What number is missing in the progression?';
playGame(progressionQuestionText, generateQuestionAndAnswer, checkCalcAnswer);
