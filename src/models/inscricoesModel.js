const db = require('./dbconnection');

var Inscricoes = {

    readByAluno: (id_aluno) => {
        return db.query("SELECT inscricoes.id, turma.numero_turma, turma.turno, disciplina.nome, professor.nome FROM inscricoes LEFT JOIN turma ON inscricoes.numero_turma = turma.numero_turma INNER JOIN professor ON turma.id_professor = professor.id INNER JOIN disciplina ON turma.id_disciplina = disciplina.id AND inscricoes.id_aluno = ?",
        [ id_aluno ]
        );
    }
};

module.exports = Inscricoes;