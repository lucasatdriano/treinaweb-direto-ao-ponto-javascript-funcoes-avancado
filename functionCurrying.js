// Função currying
function mult(a) {
    return function (b) {
        return a * b;
    };
}

console.log(mult(5)(10));
