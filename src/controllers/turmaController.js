const turmaModel = require('../models/turmaModel')
const loginController = require('./loginController');

/* Função que chama a função de checar as turmas do modelo inscrição, retornando um
array com objetos das turmas inscritas */
const checkClasses = async (req, res) => {

    const user_id = req.userId;
    const user_login = req.userLogin;
    const user_registration = req.userRegistration;

    const classes_infos = await turmaModel.checkClasses(user_id, user_login, user_registration);

    return res.status(200).json(classes_infos)

};

const getClasses = async (req, res) => {
    const turmas = await turmaModel.readAll();
    return res.status(200).json(turmas);
};

const createClass = async (req, res) => {
    turmaModel.createSingle(req.body);
    return res.status(200).json({ message: "ok" });
};

const updateSchedule = async (req, res) => {

    const user_id = req.userId;
    const user_login = req.userLogin;
    const checkAdmin = await loginController.verifyAdmin(user_id, user_login);

    if(checkAdmin){
        turmaModel.updateSchedule(req.body);
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
        turmaModel.updateProfessor(req.body);
        return res.status(200).json({ message: "ok"});
    } else {
        return res.status(401).json({ message: 'Apenas Admins podem atualizar o professor de uma turma' })
    }

};

const deleteClass = async (req, res) => {

    const user_id = req.userId;
    const user_login = req.userLogin;
    const checkAdmin = await loginController.verifyAdmin(user_id, user_login);

    const num_turma = req.body.numero_turma;
    
    if(checkAdmin){
        
        const result = await turmaModel.deleteClass(num_turma)

        if (result) {

            return res.status(200).json({ message: 'Turma deletada com sucesso' });

        } else {

        return res.status(200).json({ message: `Não foi possível deletar a turma ${num_turma} pois há alunos inscritos nela.` })

        }
    } else {

        return res.status(401).json({ message: 'Apenas Admins podem deletar uma turma.' });
    }

}

module.exports = {
    checkClasses,
    getClasses,
    createClass,
    updateSchedule,
    updateProfessor,
    deleteClass
}