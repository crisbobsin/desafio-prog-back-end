const db = require('./dbconnection');

var Turmas = {

    /* Função que faz um select junto de uma sequencia de consultas para retornar um objeto contendo as turmas
    e suas informaçõesque o aluno logado está inscrito */
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
        
        return await queryResult[0];

    },

    updateSchedule: (turma) => {

        db.query("UPDATE turma SET turno = ? WHERE numero_turma = ?",
            [ turma.turno, turma.numero_turma ]);
    },

    updateProfessor: (turma) => {

        db.query("UPDATE turma SET id_professor = ? WHERE numero_turma = ?",
            [ turma.id_professor, turma.numero_turma ]);
    }

}

module.exports = Turmas;