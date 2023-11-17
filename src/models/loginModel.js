const db = require('./dbconnection');

const loginManager = {

    loginCheck: async (login, _callback) => {
        const user = login.login;
        const password = login.senha;

        const userQueryAluno = 'SELECT * FROM aluno WHERE login = (?) AND senha = (?)';
        const resultAluno = await db.query(userQueryAluno, [user, password]);

        const userQueryProfessor = 'SELECT * FROM professor WHERE login = (?) AND senha = (?)';
        const resultProfessor = await db.query(userQueryProfessor, [user, password]);

        if (resultAluno[0].length > 0) {
            console.log('Logado')
            return resultAluno[0][0];
        } else if (resultProfessor[0].length > 0) {
            console.log('Logado')
            return resultProfessor[0][0];
        } else {
            // Caso nenhum resultado seja encontrado
            console.log('Usuário ou senha incorretos.');
            return null;
        }
    }
    
};

module.exports = loginManager;