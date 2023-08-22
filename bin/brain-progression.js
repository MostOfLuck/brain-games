#!/usr/bin/env node
import { playGame, greetPlayer } from '../src/utils/gameUtils.js';
import '../src/games/brain-progression.js';

const playerName = greetPlayer();
playGame(playerName);
