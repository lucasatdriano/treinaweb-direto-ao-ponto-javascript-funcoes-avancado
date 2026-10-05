const userData = {
    username: 'emma',
    password: 'ZRYAK3GSS3wQujr',
};

const adminData = {
    username: 'sarah',
    password: 'r5tHZE9DUP1SgTB',
};

const userToDelete = 'carter';

class User {
    username = '';
    #password = '';

    constructor(username, password) {
        this.username = username;
        this.#password = password;
    }

    #updatePassword(newPassword) {
        this.#password = newPassword;
        console.log(this.#password);
    }

    resetPassword(newPassword) {
        this.#updatePassword(newPassword);

        return 'Senha Atualizada com sucesso';
    }
}

class Admin extends User {
    isAdmin = true;

    constructor(username, password) {
        super(username, password);
        this.isAdmin = true;
    }

    deleteUser(userToDelete) {
        return `The user ${userToDelete} has been deleted`;
    }
}

const user = new User(userData.username, userData.password);
const admin = new Admin(adminData.username, adminData.password);
const data = [user, admin];

console.log(data);
console.log(user.resetPassword('FSFDFR564$'));
console.log(admin.deleteUser(userToDelete));
