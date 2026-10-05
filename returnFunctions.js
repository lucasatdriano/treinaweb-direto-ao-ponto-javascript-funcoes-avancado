// Função com retorno simples
function returnSimple(value) {
    if (value == 5) {
        return 26;
    } else if (value >= 10) {
        return 'Legal';
    }

    return value;
}

// Função com retorno de array
function returnArray(value) {
    return [value];
}

// Função com retorno de objeto
function returnObject(value) {
    return { value };
}
function returnObject2(value) {
    const data = { value };

    return data;
}

// Função de retorno de função
function returnFunction(value) {
    function myFunc() {
        return value;
    }

    return myFunc();
}

function returnFunction2(value) {
    return function () {
        return value;
    };
}

const returnFunction3 = (value) => () => {
    return value;
};

//Teste
console.log(returnSimple(2));
console.log(returnSimple(5));
console.log(returnSimple(10));

console.log(returnArray(10));

console.log(returnObject(20));
console.log(returnObject2(20));

console.log(returnFunction(30));
console.log(returnFunction2(30)());
console.log(returnFunction3(30)());
