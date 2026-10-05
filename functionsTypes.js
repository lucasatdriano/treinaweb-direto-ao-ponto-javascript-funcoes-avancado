// Função com parâmetro posicional
function myFuncPos(value) {
    return value;
}

// Função com valor padrão
function myFuncDef(value = 5) {
    return value;
}

// Função de desestruturação de objeto
function myFuncDes(data) {
    return data.value;
}

function myFuncDes2({ value }) {
    return value;
}

// Função de rest operador
function myFuncRes({ num1, num2, ...values }) {
    return values;
}

// Função com argumentos
function myFuncArg() {
    return [arguments];
}

//Teste
console.log(myFuncPos(10));

console.log(myFuncDef());

console.log(myFuncDes({ value: 10 }));
console.log(myFuncDes2({ value: 10 }));

console.log(myFuncRes({ num1: 10, num2: 20, num3: 30, num4: 40 }));

console.log(myFuncArg({ num1: 10, num2: 20 }, 30, 40));

// const myFunc = () => {
//     'use strict';
//     let nome = 'Ariel';

//     console.log('Olá ', nome);
// };

// myFunc();

// function calculador(x, y) {
//     'use strict';
//     console.log(x + y);
// }

// calculador(5, 10);
