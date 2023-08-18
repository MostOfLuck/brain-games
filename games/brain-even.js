#!/usr/bin/env node
import readlineSync from 'readline-sync';
import playEvenGame from '../evenGameUtils.js';

const isEven = (num) => num % 2 === 0;

console.log('Welcome to the Brain Games!');
const playerName = readlineSync.question('May I have your name? ');

console.log(`Hello, ${playerName}!`);
playEvenGame(playerName, isEven);
