#!/usr/bin/env node
import readlineSync from 'readline-sync';

export const playGame = (introMessage, generateQuestionAndAnswer) => {
  const greetPlayer = () => {
    console.log('Welcome to the Brain Games!');
    const playerName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${playerName}!`);
    return playerName;
  };

  const displayQuestion = (question) => readlineSync.question(`Question: ${question}\nYour answer: `);

  const displayResult = (isCorrect, correctAnswer, playerName) => {
    if (!isCorrect) {
      console.log(`'${correctAnswer}' is the correct answer.`);
      console.log(`Let's try again, ${playerName}!`);
      process.exit(1);
    }
    console.log('Correct!');
  };

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
