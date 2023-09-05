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
    if (isCorrect) {
      console.log('Correct!');
    } else {
      console.log(`'${correctAnswer}' is the correct answer.`);
      console.log(`Let's try again, ${playerName}!`);
      process.exit(1);
    }
  };

  const getPlayerName = greetPlayer();
  console.log(introMessage);

  let correctAnswers = 0;

  const checkAnswer = (userAnswer, correctAnswer) => userAnswer === correctAnswer;

  while (correctAnswers < 3) {
    const { question, correctAnswer } = generateQuestionAndAnswer();
    const userAnswer = displayQuestion(question);

    const isCorrect = checkAnswer(userAnswer, correctAnswer);
    displayResult(isCorrect, correctAnswer, getPlayerName);

    correctAnswers += isCorrect ? 1 : 0;
  }

  console.log(`Congratulations, ${getPlayerName}!`);
  process.exit(0);
};

export default playGame;
