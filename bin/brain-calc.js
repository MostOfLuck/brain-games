#!/usr/bin/env node
import readlineSync from 'readline-sync';

const playCalcGame = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log('What is the result of the expression?');

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    const operators = ['+', '-', '*'];
    const operator = operators[Math.floor(Math.random() * operators.length)];

    const expression = `${num1} ${operator} ${num2}`;
    const correctAnswer = eval(expression).toString();

    console.log(`Question: ${expression}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log("Let's try again!");
    }
  }

  console.log(`Congratulations, ${playerName}!`);
};

playCalcGame();
