#!/usr/bin/env node
import { playGame, greetPlayer } from '../src/utils/gameUtils.js';
import { generateQuestionAndAnswer } from '../src/utils/progressionGameUtils.js';

const progressionQuestionText = 'What number is missing in the progression?';
const playerName = greetPlayer();
playGame(progressionQuestionText, generateQuestionAndAnswer, playerName);
