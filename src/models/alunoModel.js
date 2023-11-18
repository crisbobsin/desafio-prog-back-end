const db = require('./dbconnection');

/* A função é assíncrona para utilizarmos o await, pois há a
necessidade de aguardar o processamento da consulta. */
const aluno = {

    /* Função criada para criar um novo aluno no banco de dados. o parametro aluno é um body com as informações a serem trabalhadas. */
    createStudent: (aluno, _callback) => {
        
        const query = 'INSERT INTO aluno (nome, curso, login, senha) VALUES (?,?,?,?)'
        const values = [aluno.nome, aluno.curso, aluno.login, aluno.senha]
    
        db.query(query, values);

    },

}

module.exports = aluno;