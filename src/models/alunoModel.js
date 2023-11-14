const db = require('./dbconnection');

/* A função é assíncrona para utilizarmos o await, pois há a
necessidade de aguardar o processamento da consulta. */
const aluno = {

    // Retorna um Json contendo as informações do perfil do aluno
    getProfile: async (student_id, _callback) => {

        return await db.query('SELECT aluno.nome, aluno.matricula, aluno.curso, aluno.login FROM aluno WHERE id=(?)', [student_id]);
        
    },

    createStudent: (aluno, _callback) => {
        
        const query = 'INSERT INTO aluno (nome, matricula, curso, login, senha) VALUES (?,?,?,?,?)'
        const values = [aluno.nome, aluno.matricula, aluno.curso, aluno.login, aluno.senha]
        
        db.query(query, values);

    },

    checkClasses: async (student_id, _callback) => {
        
        const turma_inscrita = await db.query(
            'SELECT numero_turma FROM inscricoes WHERE id_aluno = (?)',
            [student_id]
        )[0];
        const id_disciplina_inscrita = await db.query(
            'SELECT id_disciplina FROM turma WHERE numero_turma = (?)',
            [turma_inscrita]
        )[0];
        const disciplina_inscrita = await db.query(
            'SELECT nome FROM disciplina WHERE id = (?)',
            [id_disciplina_inscrita]
        )[0];
        
        console.log(turma_inscrita, id_disciplina_inscrita, disciplina_inscrita)

        return await db.query(
            'SELECT numero_turma FROM inscricoes WHERE id_aluno = (?)',
            [student_id]
        )[0];

    }

}

module.exports = aluno;