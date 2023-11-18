const db = require('./dbconnection');

const inscricao = {

    /* Função simples que realiza um insert usando o ID do aluno logado e o numero da turma */
    subscribeClass: async (user_id, user_login, class_num, _callback) => {

        const isStudent = await db.query('SELECT * FROM aluno WHERE id = (?) AND login = (?)', [user_id, user_login]);
        if (isStudent[0].length > 0) {
            console.log('Inscrição realizada.')
            await db.query('INSERT INTO inscricoes (id_aluno, numero_turma) VALUES (?, ?)', [user_id, class_num])
        } else {
            console.log('É necessário ser aluno para se inscrever em uma turma')
        }

    },

    /* Função que apenas deleta a inscrição do aluno logado da turma selecionada */
    unsubscribeClass: async (user_id, user_login, class_num, _callback) => {

        const isStudent = await db.query('SELECT * FROM aluno WHERE id = (?) AND login = (?)', [user_id, user_login]);
        console.log(isStudent[0])
        
        if (isStudent[0].length > 0) {
            console.log('Deletado.')
            await db.query('DELETE FROM inscricoes WHERE id_aluno = (?) AND numero_turma = (?)', [user_id, class_num])
        } else {
            console.log('É necessário ser aluno para se desinscrever em uma turma')
        }
    
    }

}

module.exports = inscricao;