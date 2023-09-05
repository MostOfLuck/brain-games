#!/usr/bin/env node
import readlineSync from 'readline-sync';

const greetPlayer = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
};

const displayQuestion = (question) => readlineSync.question(`Question: ${question}\nYour answer: `);

const displayResult = (isCorrect, correctAnswer, playerName) => {
  console.log(isCorrect ? 'Correct!' : `'${correctAnswer}' is the correct answer.\nLet's try again, ${playerName}!`);
  if (!isCorrect) process.exit(1);
};

export const playGame = (introMessage, generateQuestionAndAnswer) => {
  const playerName = greetPlayer();
  console.log(introMessage);

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const { question, correctAnswer } = generateQuestionAndAnswer();
    const userAnswer = displayQuestion(question);

    const isCorrect = userAnswer === correctAnswer;
    displayResult(isCorrect, correctAnswer, playerName);

    correctAnswers += isCorrect ? 1 : 0;
  }

  console.log(`Congratulations, ${playerName}!`);
  process.exit(0);
};

export default playGame;
