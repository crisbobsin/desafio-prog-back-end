const db = require('./dbconnection');

const loginManager = {

    /* Função que checa as informações de login e senha passadas pelo body */
    loginCheck: async (login, _callback) => {
        const user = login.login;
        const password = login.senha;

        /* Variável armazena o resultado da consulta do login e senha inseridos na tabela aluno.
        Caso não tenha informações, será retornado um array vazio */
        const userQueryAluno = 'SELECT * FROM aluno WHERE login = (?) AND senha = (?)';
        const resultAluno = await db.query(userQueryAluno, [user, password]);

        /* Variável armazena o resultado da consulta do login e senha inseridos na tabela professor.
        Caso não tenha informações, será retornado um array vazio */
        const userQueryProfessor = 'SELECT * FROM professor WHERE login = (?) AND senha = (?)';
        const resultProfessor = await db.query(userQueryProfessor, [user, password]);

        /* Condições que verificam se o array de aluno ou professor está vazio ou não.
        Caso algum dos 2 não esteja vazio, irá retornar o objeto do usuário logado */
        if (resultAluno[0].length > 0) {
            console.log('Logado')
            return resultAluno[0][0];
        } else if (resultProfessor[0].length > 0) {
            console.log('Logado')
            return resultProfessor[0][0];
        } else {
            // Caso nenhum resultado seja encontrado
            console.log('Usuário ou senha incorretos.');
            return false;
        }
    }
    
};

module.exports = loginManager;