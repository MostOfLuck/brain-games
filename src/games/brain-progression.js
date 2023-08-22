#!/usr/bin/env node
import { playGame, greetPlayer } from '../utils/gameUtils.js';
import { generateQuestionAndAnswer } from '../utils/progressionGameUtils.js';

const gameQuestionText = 'What number is missing in the progression?';
const playerName = greetPlayer();
playGame(gameQuestionText, generateQuestionAndAnswer, playerName);

export default playGame;
