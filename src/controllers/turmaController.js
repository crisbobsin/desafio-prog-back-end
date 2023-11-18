const turmaModel = require('../models/turmaModel')
const loginController = require('./loginController');

/* Função que chama a função de checar as turmas do modelo inscrição, retornando um
array com objetos das turmas inscritas */
const checkClasses = async (req, res) => {

    const user_id = req.userId;

    const classes_infos = await turmaModel.checkClasses(user_id);

    return res.status(200).json(classes_infos)

};

const updateSchedule = async (req, res) => {

    const user_id = req.userId;
    const user_login = req.userLogin;
    const checkAdmin = await loginController.verifyAdmin(user_id, user_login);

    if(checkAdmin){
        turmaModel.updateProfessor(req.body);
        return res.status(201).json({ message: "ok"});
    } else {
        return res.status(401).json({ message: 'Apenas Admins podem atualizar o horário de uma turma' })
    }
};

const updateProfessor = async (req, res) => {

    const user_id = req.userId;
    const user_login = req.userLogin;
    const checkAdmin = await loginController.verifyAdmin(user_id, user_login);

    if(checkAdmin){
        turmaModel.del(req.query.id);
        return res.status(200).json({ message: "ok"});
    } else {
        return res.status(401).json({ message: 'Apenas Admins podem atualizar o professor de uma turma' })
    }

};

module.exports = {
    checkClasses,
    updateSchedule,
    updateProfessor
}