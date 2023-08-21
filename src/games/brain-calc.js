#!/usr/bin/env node
// src/games/brain-calc.js
import { playGame } from '../utils/gameUtils.js';
import generateQuestionAndAnswer from '../utils/calcUtils.js';

playGame('What is the result of the expression?', generateQuestionAndAnswer);
