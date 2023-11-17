const alunoModel = require('../models/alunoModel');
const loginController = require('./loginController')

/*Criação de uma função que será chamada na rota no arquivo router.
A função sempre deve conter um 'request' e um 'response'.*/
const createStudent = async (req, res) => {

    // Para verificar se é ADM
    const user_id = req.userId;
    const user_login = req.userLogin;
    const checkAdmin = await loginController.verifyAdmin(user_id, user_login);

    /* Validação de se o usuário logado é um admin. */
    if (checkAdmin) {
        alunoModel.createStudent(req.body);
        return res.status(201).json({ message: 'Aluno Criado' });
    } else {
        return res.status(401).json({ message: 'Apenas Admins podem criar um aluno' })
    }
    

};

module.exports = {
    createStudent
};