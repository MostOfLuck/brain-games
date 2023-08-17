#!/usr/bin/env node
import readlineSync from 'readline-sync';

const generateExpression = () => {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  return { num1, num2, operator };
};

const calculate = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const askForName = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
};

const showGameIntro = (introMessage) => {
  const playerName = askForName();
  console.log(introMessage);
  return playerName;
};

const playGame = (introMessage, checkAnswerFn) => {
  const playerName = showGameIntro(introMessage);

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const { num1, num2, operator } = generateExpression();
    const expression = `${num1} ${operator} ${num2}`;
    const correctAnswer = calculate(num1, operator, num2).toString();

    console.log(`Question: ${expression}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (checkAnswerFn(userAnswer, correctAnswer)) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${playerName}!`);
};
const checkCalcAnswer = (userAnswer, correctAnswer) => userAnswer === correctAnswer;

const playCalcGame = () => {
  playGame('What is the result of the expression?', checkCalcAnswer);
};

playCalcGame();
