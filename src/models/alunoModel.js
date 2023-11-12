const db = require('./dbconnection');


const getInfos = async () => {
    const perfil = await db.execute('SELECT * FROM aluno');
    /* A função é assíncrona para utilizarmos o await, pois há a
    necessidade de aguardar o processamento da consulta. */
    return perfil;
};

module.exports = {
    getInfos
};