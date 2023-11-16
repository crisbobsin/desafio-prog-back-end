const alunoModel = require('../models/alunoModel');
const loginController = require('./loginController')

/*Criação de uma função que será chamada na rota no arquivo router.
A função sempre deve conter um 'request' e um 'response'.*/
const getProfile = async (req, res) => {

    const user_id = req.userId;

    const profile = await alunoModel.getProfile(user_id);

    return res.status(200).json(profile[0]);
};

const createStudent = async (req, res) => {

    const user_id = req.userId;

    const user_login = req.userLogin;

    const checkAdmin = await loginController.verifyAdmin(user_id, user_login);

    if (checkAdmin) {
        alunoModel.createStudent(req.body, user_id);
        res.status(201).json({ message: 'Aluno Criado' });
    } else {
        res.status(401).json({ message: 'Apenas Admins podem criar um aluno' })
    }
    

};

const checkClasses = async (req, res) => {

    const user_id = req.userId;

    const classes_infos = await alunoModel.checkClasses(user_id);

    return res.status(200).json(classes_infos)

}

module.exports = {
    getProfile,
    createStudent,
    checkClasses
};