const data = {
    nome: 'Ariel',
    email: 'ariel@gmail.com',
    add() {
        this.idade = 25;
        console.log(this);
        this.email = 'arielzinha@gmail.com';
    },
};

console.log(data);
data.add();
console.log(data);

function User(nome, email, idade) {
    console.log(this);
    this.nome = nome;
    this.email = email;
    this.idade = idade;
}

const user = new User('Fernando', 'fernando@gmail.com', 30);
console.log(user);

class UserClass {
    #senha = '';

    constructor(nome, email, idade, senha) {
        this.nome = nome;
        this.email = email;
        this.idade = idade;
        this.#senha = senha;
    }

    addSenha(senha) {
        this.#senha = senha;
    }

    verificarSenha() {
        return this.#senha;
    }

    static compararSenhas(senha1, senha2) {
        if (senha1 === senha2) {
            return 'Iguais';
        }

        return 'Diferentes';
    }

    receberSenhas(senha1, senha2) {
        return this.compararSenhas(senha1, senha2);
    }
}

const userClass = new UserClass('Felipe', 'felipe@gmail.com', 22, '123456');

console.log(userClass.verificarSenha());
userClass.addSenha('654321');
console.log(userClass.verificarSenha());

console.log(userClass);
// console.log(userClass.compararSenhas(userClass.verificarSenha(), '654321')); não consigo usar
console.log(userClass.receberSenhas(userClass.verificarSenha(), '654321'));
console.log(userClass.senha);
