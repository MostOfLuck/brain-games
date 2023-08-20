#!/usr/bin/env node

import generateGCDQuestion from '../src/utils/gcdUtils.js';
import { playGame, checkCalcAnswer } from '../src/utils/gameUtils.js';

const gcdQuestionText = 'Find the greatest common divisor of given numbers.';
playGame(gcdQuestionText, generateGCDQuestion, checkCalcAnswer);
