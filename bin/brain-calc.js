#!/usr/bin/env node
// bin/brain-calc.js
import { playGame } from '../src/utils/gameUtils.js';
import generateQuestionAndAnswer from '../src/utils/calcUtils.js';

playGame('What is the result of the expression?', generateQuestionAndAnswer);
