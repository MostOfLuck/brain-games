#!/usr/bin/env node
import generateGCDQuestion from '../src/utils/gcdUtils.js';
import { playGame, greetPlayer } from '../src/utils/gameUtils.js';

const gcdQuestionText = 'Find the greatest common divisor of given numbers.';
const playerName = greetPlayer();
playGame(gcdQuestionText, generateGCDQuestion, playerName);
