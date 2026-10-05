// 'use strict';

nome = 'lucas';
console.log(nome);

function testThis() {
    return this;
}
// console.log(testThis());

function user(email) {
    email = 'email@gmail.com';

    console.log('Olá', email);
}
user('luc@gmail.com');

function userName() {
    name = 'rodrigo';

    console.log('Olá', name);
}
userName();
console.log('Olá', name);
