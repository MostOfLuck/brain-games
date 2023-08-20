#!/usr/bin/env node
import { playGame, checkCalcAnswer } from '../src/utils/gameUtils.js';
import generateQuestionAndAnswer from '../src/utils/primeGameUtils.js';

const primeQuestionText = 'Answer "yes" if given number is prime. Otherwise answer "no".';
playGame(primeQuestionText, generateQuestionAndAnswer, checkCalcAnswer);
