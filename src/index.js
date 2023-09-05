#!/usr/bin/env node
import readlineSync from 'readline-sync';

export const playGame = (introMessage, generateQuestionAndAnswer) => {
  let playerName = null;

  const greetPlayer = () => {
    console.log('Welcome to the Brain Games!');
    playerName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${playerName}!`);
  };

  greetPlayer();
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
      process.exit(0);
    }
  }

  console.log(`Congratulations, ${playerName}!`);
  process.exit(0);
};
export default playGame;
