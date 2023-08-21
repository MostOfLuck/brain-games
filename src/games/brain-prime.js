#!/usr/bin/env node
import { playGame } from '../utils/gameUtils.js';
import generateQuestionAndAnswer from '../utils/primeGameUtils.js';

const primeQuestionText = 'Answer "yes" if given number is prime. Otherwise answer "no".';
playGame(primeQuestionText, generateQuestionAndAnswer);
