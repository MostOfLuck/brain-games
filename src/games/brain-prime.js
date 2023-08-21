#!/usr/bin/env node
import { playGame, checkCalcAnswer } from '../gameUtils.js';
import generateQuestionAndAnswer from '../primeGameUtils.js';

const primeQuestionText = 'Answer "yes" if given number is prime. Otherwise answer "no".';
playGame(primeQuestionText, generateQuestionAndAnswer, checkCalcAnswer);
