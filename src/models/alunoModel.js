const db = require('./dbconnection');

/* A função é assíncrona para utilizarmos o await, pois há a
necessidade de aguardar o processamento da consulta. */
const aluno = {

    getProfile: async (aluno, _callback) => {

        return db.query('SELECT * FROM aluno WHERE id=(?)', [aluno]);
        
    }

}

module.exports = aluno;