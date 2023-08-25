// src/utils/utils.js
export const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export default generateRandomNumber;
