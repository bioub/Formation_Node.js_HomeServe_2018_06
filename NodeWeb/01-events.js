const { EventEmitter } = require('events');


const events = new EventEmitter();

// lib
function createUser(user) {
  // TODO create user in Mongo
  events.emit('user.created', user);
}

// projet 1
events.on('user.created', (user) => {
  console.log(`User ${user.prenom} created`);
});

createUser({prenom: 'Toto'});
createUser({prenom: 'Titi'});
