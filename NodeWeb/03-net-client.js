const net = require('net');

const socket = net.connect(80, 'www.google.com');

socket.write('GET /search?q=Node.js HTTP/1.1\r\n');
socket.write('Host: www.google.com\r\n');
socket.end('\r\n');

socket.pipe(process.stdout); // Ecrit la réponse dans le terminal

socket.on('error', (err) => {
  console.log(err);
});
