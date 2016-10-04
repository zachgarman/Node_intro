function getRandomNumber(min, max) {
  return (Math.floor(Math.random() * (1 + max - min) + min)).toFixed(2);
}

module.exports = getRandomNumber;
