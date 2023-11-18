const turmaModel = require('../models/turmaModel')

/* Função que chama a função de checar as turmas do modelo inscrição, retornando um
array com objetos das turmas inscritas */
const checkClasses = async (req, res) => {

    const user_id = req.userId;

    const classes_infos = await turmaModel.checkClasses(user_id);

    return res.status(200).json(classes_infos)

};

module.exports = {
    checkClasses
}