const alunoModel = require('../models/alunoModel');
const loginController = require('./loginController')

/*Criação de uma função que será chamada na rota no arquivo router.
A função sempre deve conter um 'request' e um 'response'.*/
const createStudent = async (req, res) => {

    // Para verificar se é ADM
    const user_id = req.userId;
    const user_login = req.userLogin;

    const checkAdmin = await loginController.verifyAdmin(user_id, user_login);

    if (checkAdmin) {
        alunoModel.createStudent(req.body);
        return res.status(201).json({ message: 'Aluno Criado' });
    } else {
        return res.status(401).json({ message: 'Apenas Admins podem criar um aluno' })
    }
    

};

const unsubscribeClass = async (req, res) => {

    const user_id = req.userId;
    const class_number = req.body.numero_turma

    alunoModel.unsubscribeClass(user_id, class_number);

    return res.status(200).json({ message: `Sua inscrição na turma ${class_number} foi cancelada.` })

}

module.exports = {
    createStudent,
    unsubscribeClass
};