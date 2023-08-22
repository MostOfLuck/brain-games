#!/usr/bin/env node
import { playGame, greetPlayer } from '../src/utils/gameUtils.js';
import '../src/games/brain-gcd.js';

const playerName = greetPlayer();
playGame(playerName);
