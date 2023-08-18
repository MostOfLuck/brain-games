import readlineSync from 'readline-sync';

const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const getUserAnswer = () => readlineSync.question('Your answer: ');

const displayResult = (userAnswer, correctAnswer, playerName) => {
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(
    `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
  );
  console.log(`Let's try again, ${playerName}!`);
  return false;
};

const playEvenGame = (playerName, isEvenFn) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const generatedNumber = generateRandomNumber();
    console.log(`Question: ${generatedNumber}`);
    const userAnswer = getUserAnswer();
    const correctAnswer = isEvenFn(generatedNumber) ? 'yes' : 'no';

    if (displayResult(userAnswer, correctAnswer, playerName)) {
      correctAnswers += 1;
    } else {
      break;
    }
  }

  if (correctAnswers === 3) {
    console.log(`Congratulations, ${playerName}!`);
  }
};

export default playEvenGame;
