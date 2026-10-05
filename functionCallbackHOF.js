// Função de callback
function myFuncCallback(value, callback) {
    return callback(value);
}

function myCallback(value) {
    return value * 2;
}

//Teste
console.log(myFuncCallback(10, myCallback));

//Função de callback com arrow function
console.log(myFuncCallback(10, (value) => value * 2));

// Função de callback com arrow function e retorno de objeto
console.log(
    myFuncCallback(10, (value) => {
        return { value: value * 2 };
    }),
);

// Função de ordem superior (HOF)
function dobro(value) {
    return value * 2;
}

function triplo(value) {
    return value * 3;
}

function myFuncHigherOrder(value, func) {
    return func(value);
}

function myFuncHigherOrder2(value, func) {
    const result = func(value);

    return result;
}

function myFuncHigherOrder3(value) {
    function quadruplo(value) {
        return value * 4;
    }

    return quadruplo;
}
const gerarQuadruplo = myFuncHigherOrder3();

//Teste
console.log(myFuncHigherOrder(5, dobro));
console.log(myFuncHigherOrder(5, triplo));
console.log(myFuncHigherOrder2(5, triplo));
console.log(gerarQuadruplo(5));
