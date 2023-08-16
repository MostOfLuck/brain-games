#!/usr/bin/env node
import readlineSync from 'readline-sync';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const askForName = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
};

const showPrimeGameIntro = () => {
  const playerName = askForName();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  return playerName;
};

const playBrainPrimeGame = () => {
  const playerName = showPrimeGameIntro();

  const gameRound = () => {
    const number = Math.floor(Math.random() * 100) + 1;
    const question = number;
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    return { question, correctAnswer };
  };

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const { question, correctAnswer } = gameRound();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
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

playBrainPrimeGame();
