// Função assincrona
async function myFuncAsync() {
    const result = await Promise.resolve('Função assincrona executada');
    console.log(result);
}
myFuncAsync();

// Função com setTimeout
function myFuncTimeoutDepois() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Função com setTimeout executada depois');
            resolve();
        }, 3000);
    });
}

async function myFuncTimeoutAntes() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Função com setTimeout executada antes');
            resolve();
        }, 3000);
    });
}

function myFuncDepois() {
    myFuncTimeoutDepois();
    console.log('Função com setTimeout executada antes do timeout');
}
myFuncDepois();

async function myFuncAntes() {
    await myFuncTimeoutAntes();
    console.log('Função com setTimeout executada após o timeout');
}
myFuncAntes();

// Função com Promise
async function myFuncPromise() {
    await new Promise((resolve) => {
        setTimeout(() => {
            console.log('Função com Promise executada');
            resolve();
        }, 3000);
    });

    console.log('Função com Promise executada depois do timeout');
}
myFuncPromise();
