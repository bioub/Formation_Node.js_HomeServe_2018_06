const net = require('net');

const server = net.createServer();

server.on('connection', (socket) => {
  socket.pipe(process.stdout);
  socket.write('HTTP/1.1 200 OK\r\n');
  socket.write('Content-type: text/plain\r\n');
  socket.write('\r\n');
  socket.write('Hello\r\n');
  socket.end('\r\n');
});

server.on('error', (err) => {
  console.log(err);
});

server.on('listening', () => {
  console.log('Server started : http://localhost:8080/');
});

server.listen(8080);
