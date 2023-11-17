const db = require('./dbconnection');

/* A função é assíncrona para utilizarmos o await, pois há a
necessidade de aguardar o processamento da consulta. */
const aluno = {

    createStudent: (aluno, _callback) => {
        
        const query = 'INSERT INTO aluno (nome, matricula, curso, login, senha) VALUES (?,?,?,?,?)'
        const values = [aluno.nome, aluno.matricula, aluno.curso, aluno.login, aluno.senha]
    
        db.query(query, values);

    },

    unsubscribeClass: async (user_id, class_num, _callback) => {

        db.query('DELETE FROM inscricoes WHERE id_aluno = (?) AND numero_turma = (?)', [user_id, class_num])
    
    }

}

module.exports = aluno;