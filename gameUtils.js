// gameUtils.js
import readlineSync from 'readline-sync';

export const checkCalcAnswer = (userAnswer, correctAnswer) => userAnswer === correctAnswer;

export const greetPlayer = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
};

export const playGame = (
  introMessage,
  generateQuestionAndAnswer,
  checkAnswerFn,
) => {
  const playerName = greetPlayer();
  console.log(introMessage);

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const { question, correctAnswer } = generateQuestionAndAnswer();
    const userAnswer = readlineSync.question(
      `Question: ${question}\nYour answer: `,
    );

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
