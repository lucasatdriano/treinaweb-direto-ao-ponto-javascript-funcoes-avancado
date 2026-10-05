// Funções auto-executáveis
function myFunc() {
    console.log('Executou');
}
myFunc();

(function myFuncAutoExec() {
    console.log('Função auto-executável');
})();

(function () {
    console.log('Função auto-executável sem nome');
})();

// Função auto-executável com async
(async function () {
    const result = await Promise.resolve('Função com promise executada');
    console.log(result);
})();

// Função auto-executável com parametros
function myFuncParam(value) {
    console.log('Função com parametro: ', value);
}
myFuncParam(20);

(function (value) {
    console.log('Função auto-executável com parametro: ', value);
})(10);

// Função auto-executável com parametro interno
(function () {
    const value = 30;
    console.log('Função auto-executável com parametro interno: ', value);
})();
