#!/usr/bin/env node
import { playGame, checkCalcAnswer } from '../gameUtils.js';
import { generateExpression, calculate } from '../calcUtils.js';

const generateQuestionAndAnswer = () => {
  const { num1, num2, operator } = generateExpression();
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = calculate(num1, operator, num2).toString();
  return { question, correctAnswer };
};

playGame(
  'What is the result of the expression?',
  generateQuestionAndAnswer,
  checkCalcAnswer,
);
