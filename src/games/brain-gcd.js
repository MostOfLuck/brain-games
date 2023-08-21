#!/usr/bin/env node
import { playGame } from '../utils/gameUtils.js';
import generateGCDQuestion from '../utils/gcdUtils.js';

const gcdQuestionText = 'Find the greatest common divisor of given numbers.';
playGame(gcdQuestionText, generateGCDQuestion);
