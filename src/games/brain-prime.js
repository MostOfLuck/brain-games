#!/usr/bin/env node
import { playGame, greetPlayer } from '../utils/gameUtils.js';
import generateQuestionAndAnswer from '../utils/primeGameUtils.js';

const primeQuestionText = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const playerName = greetPlayer();
playGame(primeQuestionText, generateQuestionAndAnswer, playerName);

export default playGame;
