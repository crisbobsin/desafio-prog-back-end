const db = require('./dbconnection');

const profile = {

    // Retorna um Json contendo as informações do perfil do aluno
    getProfile: async (user_id, user_login, _callback) => {
        
        const aluno = await db.query('SELECT nome, matricula, curso, login FROM aluno WHERE id=(?) AND login = (?)', [user_id, user_login]);
        const professor = await db.query('SELECT nome, login, admin FROM professor WHERE id=(?) AND login = (?)', [user_id, user_login]);

        if (aluno[0].length > 0) {
            console.log('aluno ' + aluno[0][0])
            return aluno[0][0]
        } else if (professor[0].length > 0) {
            console.log('Professor ' + professor[0][0])
            return professor[0][0]
        } else {
            console.log('Erro')
            return { message: 'Perfil não encontrado' }
        }
        
    }
}

module.exports = profile;