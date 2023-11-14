const inscricoesModel = require('../models/inscricoesModel');

const getInscricoesByAluno = async (req, res) =>{
    const inscricoes = await inscricoesModel.readByAluno(req.query.id);
    return res.status(200).json(inscricoes);
}

module.exports = {
    getInscricoesByAluno
}