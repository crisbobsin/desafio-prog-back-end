const db = require('./dbconnection');

const inscricao = {

    /* Função simples que realiza um insert usando o ID do aluno logado e o numero da turma */
    subscribeClass: async (user_id, class_num, _callback) => {

        db.query('INSERT INTO inscricoes (id_aluno, numero_turma) VALUES (?, ?)', [user_id, class_num])

    },

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
        
        return queryResult[0];

    },

    /* Função que apenas deleta a inscrição do aluno logado da turma selecionada */
    unsubscribeClass: async (user_id, class_num, _callback) => {

        db.query('DELETE FROM inscricoes WHERE id_aluno = (?) AND numero_turma = (?)', [user_id, class_num])
    
    }

}

module.exports = inscricao;