// src/utils/primeGameUtils.js

import isPrime from './primeUtils.js';

const generateQuestionAndAnswer = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const question = `Question: ${number}`;
  return { question, correctAnswer };
};

export default generateQuestionAndAnswer;
