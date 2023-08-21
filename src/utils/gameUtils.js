// src/utils/gameUtils.js
import readlineSync from 'readline-sync';

export const greetPlayer = () => {
  console.log('Welcome to the Brain Games!');
  console.log('May I have your name?');
  const playerName = readlineSync.question();
  console.log(`Hello, ${playerName}!`);
  return playerName;
};

export const playGame = (
  introMessage,
  generateQuestionAndAnswer,
  playerName,
) => {
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
      return;
    }
  }

  console.log(`Congratulations, ${playerName}!`);
};
export default playGame;
