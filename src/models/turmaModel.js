const db = require('./dbconnection');

const Turmas = {

    /* Função que faz um select junto de uma sequencia de consultas para retornar um objeto contendo as turmas
    e suas informaçõesque o aluno logado está inscrito */
    checkClasses: async (user_id, user_login, user_registration, _callback) => {
        
        const isStudent = await db.query('SELECT * FROM aluno WHERE matricula = (?)', [user_registration]);
        const isProfessor = await db.query('SELECT * FROM professor WHERE id = (?) AND login = (?)', [user_id, user_login]);

        if (isStudent[0].length > 0) {

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

        } else if (isProfessor[0].length > 0) {

            const query = `
                SELECT turma.numero_turma, turma.turno, disciplina.nome 
                FROM turma 
                LEFT JOIN disciplina 
                ON turma.id_disciplina = disciplina.id
                WHERE turma.id_professor = (?)
            `

            const queryResult = await db.query(query, [user_id])

            return await queryResult[0]

        }

    },

    readAll: () => {
        return db.query(`
            SELECT disciplina.nome, turma.numero_turma, turma.turno
            FROM turma
            LEFT JOIN disciplina
            ON turma.id_disciplina = disciplina.id
        `);
    },

    createSingle: (turma) => {
        return db.query("INSERT INTO turma(numero_turma, turno, id_professor, id_disciplina) VALUES(?,?,?,?);",
            [ turma.numero_turma, turma.turno, turma.id_professor, turma.id_disciplina ]
        );
    },

    updateSchedule: (turma) => {
        db.query("UPDATE turma SET turno = ? WHERE numero_turma = ?",
            [ turma.turno, turma.numero_turma ]);
    
    },

    updateProfessor: (turma) => {
        db.query("UPDATE turma SET id_professor = ? WHERE numero_turma = ?",
            [ turma.id_professor, turma.numero_turma ]);

    },

    deleteClass: async (num_turma, _callback) => {

        try {

            await db.query('DELETE FROM turma WHERE numero_turma = (?)',
                [num_turma])
            return true

        } catch (error) {

            return false
            
        }        

    }

}

module.exports = Turmas;