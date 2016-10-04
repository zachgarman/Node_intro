var http = require('http');
var makeMoney = require('./makeMoney');

http.createServer(function(req, res) {
  res.writeHead(200);

  res.write(makeMoney.balance());
  res.write(makeMoney.money());

  res.end();

}).listen(3000);
