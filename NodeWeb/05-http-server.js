const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  switch (req.url) {
    case '/':
      res.statusCode = 200;
      res.setHeader('Content-type', 'text/plain');
      res.write('Hello');
      res.end();
    case '/api/contacts/1':
      res.statusCode = 200;
      res.setHeader('Content-type', 'application/json');
      res.write(JSON.stringify({prenom: 'Toto'}));
      res.end();
    default:
      res.statusCode = 404;
      res.setHeader('Content-type', 'text/html');
      res.write('<h2>Not Found</h2>');
      res.end();
  }
});

server.on('error', (err) => {
  console.log(err);
});

server.on('listening', () => {
  console.log('Server started : http://localhost:8080/');
});

server.listen(8080);
