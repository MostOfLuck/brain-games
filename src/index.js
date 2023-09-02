#!/usr/bin/env node
import readlineSync from 'readline-sync';

export const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

let playerName = null;

export const greetPlayer = () => {
  console.log('Welcome to the Brain Games!');
  playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
};

const runGame = (gameFunction) => {
  greetPlayer();
  gameFunction(playerName);
};

export const playGame = (introMessage, generateQuestionAndAnswer) => {
  console.log(introMessage);

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const { question, correctAnswer } = generateQuestionAndAnswer();
    const userAnswer = readlineSync.question(
      `Question: ${question}\nYour answer: `,
    );

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${playerName}!`);
      process.exit(1);
    }
  }

  console.log(`Congratulations, ${playerName}!`);
  process.exit(0);
};

const runCli = () => {
  console.log('Welcome to the Brain Games!');

  const playerNameCli = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerNameCli}!`);
};

export { runCli };
export default runGame;
