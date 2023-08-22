#!/usr/bin/env node
import { playGame, greetPlayer } from '../utils/gameUtils.js';
import generateGCDQuestion from '../utils/gcdUtils.js';

const gcdQuestionText = 'Find the greatest common divisor of given numbers.';
const playerName = greetPlayer();
playGame(gcdQuestionText, generateGCDQuestion, playerName);
