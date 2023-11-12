const alunoModel = require('../models/alunoModel');

/*Criação de uma função que será chamada na rota no arquivo router.
A função sempre deve conter um 'request' e um 'response'.*/
const getAll = async (req, res) => {

    const alunos = await alunoModel.getInfos();

    return res.status(200).json(alunos);
};

module.exports = {
    getAll
};