const http = require('http')
const app = require('./app');
const config = require('./config');

const server = http.createServer(app);

server.on('error', (err) => {
  console.log(err);
});

server.listen(config.port, () => {
  console.log('Server started on port ' + config.port);
})
