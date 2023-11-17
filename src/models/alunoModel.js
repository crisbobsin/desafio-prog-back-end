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
    
    },

    // Incompleto
    checkClasses: async (user_id, _callback) => {
    
        const query = `
            SELECT t.numero_turma, d.nome 
            AS disciplina 
            FROM aluno a 
            JOIN inscricoes i 
            ON a.id = i.id_aluno 
            JOIN turma t 
            ON i.numero_turma = t.numero_turma 
            JOIN disciplina d 
            ON t.id_disciplina = d.id 
            WHERE a.id = (?);
        `

        const queryResult = await db.query(query, [user_id])
        
        return queryResult[0][0];

    }

}

module.exports = aluno;