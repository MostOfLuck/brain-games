#!/usr/bin/env node
import { playGame, checkCalcAnswer } from '../gameUtils.js';
import generateGCDQuestion from '../gcdUtils.js';

const gcdQuestionText = 'Find the greatest common divisor of given numbers.';
playGame(gcdQuestionText, generateGCDQuestion, checkCalcAnswer);
