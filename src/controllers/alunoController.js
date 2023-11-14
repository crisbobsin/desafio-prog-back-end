const alunoModel = require('../models/alunoModel');

/*Criação de uma função que será chamada na rota no arquivo router.
A função sempre deve conter um 'request' e um 'response'.*/
const getAll = async (req, res) => {
    
    const logged_id = req.params.id;

    const alunos = await alunoModel.getProfile(logged_id);

    return res.status(200).json(alunos[0]);
};

module.exports = {
    getAll
};