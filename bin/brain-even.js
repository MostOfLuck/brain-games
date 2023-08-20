#!/usr/bin/env node
import readlineSync from 'readline-sync';
import playEvenGame from '../src/games/brain-even.js';

console.log('Welcome to the Brain Games!');
const playerName = readlineSync.question('May I have your name? ');

console.log(`Hello, ${playerName}!`);
playEvenGame(playerName);
