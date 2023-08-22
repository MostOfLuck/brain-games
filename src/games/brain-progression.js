#!/usr/bin/env node
import { playGame, greetPlayer } from '../utils/gameUtils.js';
import { generateQuestionAndAnswer } from '../utils/progressionGameUtils.js';

const gameQuestionText = 'Your game question text here';
const playerName = greetPlayer();
playGame(gameQuestionText, generateQuestionAndAnswer, playerName);
