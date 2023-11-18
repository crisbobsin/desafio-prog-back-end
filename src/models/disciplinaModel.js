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

    del: async (id) => {

        try {

            await db.query("DELETE FROM disciplina WHERE id = (?)",
            [ id ])
            return true

        } catch (error) {

            return false
            
        } 
    }
};

module.exports = Disciplinas;