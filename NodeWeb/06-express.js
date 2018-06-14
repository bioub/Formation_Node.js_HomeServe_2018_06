const express = require('express');
const morgan = require('morgan');

const app = express();

/*
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
*/
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/api/contacts/1', (req, res, next) => {
  if (req.headers.authorization === '123') {
    return next();
  }

  res.statusCode = 401;
  res.json({
    msg: 'Unauthorized',
  });
});

app.get('/api/contacts/1', (req, res) => {
  res.json({prenom: 'Titi'});
});

app.listen(8080, () => {
  console.log('Server started : http://localhost:8080/');
});
