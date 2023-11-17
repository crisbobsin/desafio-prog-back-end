const db = require('./dbconnection');

const inscricao = {

    subscribeClass: async (user_id, class_num, _callback) => {

        db.query('INSERT INTO inscricoes (id_aluno, numero_turma) VALUES (?, ?)', [user_id, class_num])

    },

    checkClasses: async (user_id, _callback) => {
       
        const query = `
            SELECT inscricoes.id, turma.numero_turma, turma.turno, disciplina.nome, professor.nome 
            FROM inscricoes 
            LEFT JOIN turma 
            ON inscricoes.numero_turma = turma.numero_turma 
            INNER JOIN professor 
            ON turma.id_professor = professor.id 
            INNER JOIN disciplina 
            ON turma.id_disciplina = disciplina.id 
            AND inscricoes.id_aluno = (?)
        `

        const queryResult = await db.query(query, [user_id])
        
        return queryResult[0];

    }

}

module.exports = inscricao;