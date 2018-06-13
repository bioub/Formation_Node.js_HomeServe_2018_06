// 'use strict';

const contact = {
  prenom: 'Romain',
};

function hello(p1, p2) {
  console.log(`Bonjour ${p1}, ${p2}, je m'appelle ${this.prenom} !`);
}

global.prenom = 'Toto';
hello('Jean', 'Eric');
hello.call(contact, 'Jean', 'Eric');
hello.apply(contact, ['Jean', 'Eric']);
hello.bind(contact)('Jean', 'Eric');

var contactES3 = {
  prenom: 'Romain',
  helloSync: function() {
    console.log(`Bonjour je m'appelle ${this.prenom} !`);
  },
  helloAsync: function() {
    var that = this;
    setTimeout(function() {
      console.log(`Bonjour je m'appelle ${that.prenom} !`);
    }, 1000);
  },
};

contactES3.helloSync();
contactES3.helloAsync();

var contactES5 = {
  prenom: 'Romain',
  helloSync: function() {
    console.log(`Bonjour je m'appelle ${this.prenom} !`);
  },
  helloAsync: function() {
    setTimeout(this.helloSync.bind(this), 1000);
  },
};

contactES5.helloSync();
contactES5.helloAsync();

var contactES6 = {
  prenom: 'Romain',
  helloSync() {
    console.log(`Bonjour je m'appelle ${this.prenom} !`);
  },
  helloAsync() {
    setTimeout(() => {
      console.log(`Bonjour je m'appelle ${this.prenom} !`);
    }, 1000);
  },
};

contactES6.helloSync();
contactES6.helloAsync();
