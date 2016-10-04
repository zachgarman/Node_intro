var getRandomNumber = require('./getRandomNumber');
var dollars = require('./toDollars');

var makeMoney = {
  money: function () {
    return (dollars.toDollars(getRandomNumber(100,1000000))) + '\n';
  },

  balance: function () {
    return "Account balance: \n";
  },
}

module.exports = makeMoney;
