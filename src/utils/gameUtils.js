// src/utils/gameUtils.js
import readlineSync from 'readline-sync';

const playGame = (introMessage, generateQuestionAndAnswer) => {
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
      console.log("Let's try again.");
      return;
    }
  }

  console.log('Congratulations!');
};
export default playGame;
