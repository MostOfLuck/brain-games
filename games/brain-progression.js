#!/usr/bin/env node
import readlineSync from 'readline-sync';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const playProgressionGame = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log('What number is missing in the progression?');

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const start = Math.floor(Math.random() * 50) + 1;
    const step = Math.floor(Math.random() * 10) + 1;
    const progressionLength = 10;
    const hiddenIndex = Math.floor(Math.random() * progressionLength);

    const progression = generateProgression(start, step, progressionLength);
    const correctAnswer = progression[hiddenIndex];
    progression[hiddenIndex] = '..';
    const question = progression.join(' ');

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === String(correctAnswer)) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${playerName}!`);
      break;
    }
  }

  if (correctAnswers === 3) {
    console.log(`Congratulations, ${playerName}!`);
  }
};

playProgressionGame();
