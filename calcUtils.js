// calcUtils.js

const generateExpression = () => {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  return { num1, num2, operator };
};

const calculate = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const generateQuestionAndAnswer = () => {
  const { num1, num2, operator } = generateExpression();
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = calculate(num1, operator, num2).toString();
  return { question, correctAnswer };
};

export default generateQuestionAndAnswer;
