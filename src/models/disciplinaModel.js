const db = require('./dbconnection');

var Disciplinas = {

    create: (disciplina, callback) => {

        db.query("INSERT INTO disciplina (nome) VALUES (?)",
            [ disciplina.nome ], 
            callback);
    },
    read: () => {

        return db.query('SELECT * FROM disciplina');
    },
    del: (id, callback) => {
        db.query("DELETE FROM disciplina WHERE id = (?)",
            [ id ], 
            callback);
    }
};

module.exports = Disciplinas;