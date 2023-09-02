#!/usr/bin/env node
import { playGame, greetPlayer } from '../index.js';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const playProgressionGame = () => {
  greetPlayer();
  const gameQuestionText = 'What number is missing in the progression?';

  const generateQuestionAndAnswer = () => {
    const start = Math.floor(Math.random() * 50) + 1;
    const step = Math.floor(Math.random() * 10) + 1;
    const progressionLength = 10;
    const hiddenIndex = Math.floor(Math.random() * progressionLength);

    const progression = generateProgression(start, step, progressionLength);
    const correctAnswer = String(progression[hiddenIndex]);
    progression[hiddenIndex] = '..';
    const question = progression.join(' ');

    return { question, correctAnswer };
  };

  playGame(gameQuestionText, generateQuestionAndAnswer);
};

export default playProgressionGame;
