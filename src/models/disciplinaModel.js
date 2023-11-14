const db = require('./dbconnection');

var Disciplinas = {

    create: (disciplina, callback) => {

        db.query("INSERT INTO disciplina (id, nome) VALUES (?,?)",
            [ disciplina.id, disciplina.nome ], 
            callback);
    },
    read: () => {

        return db.query('SELECT * FROM disciplina');
    },
    del: (id, callback) => {
        console.log('passou aqui');
        db.query("DELETE FROM disciplina WHERE id = ?",
            [ id ], 
            callback);
    }
};

module.exports = Disciplinas;