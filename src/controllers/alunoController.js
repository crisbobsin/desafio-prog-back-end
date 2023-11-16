const alunoModel = require('../models/alunoModel');

/*Criação de uma função que será chamada na rota no arquivo router.
A função sempre deve conter um 'request' e um 'response'.*/
const getProfile = async (req, res) => {
    
    console.log(req.userId + ' Fez essa chamda!');

    const student_id = req.userId;

    const profile = await alunoModel.getProfile(student_id);

    return res.status(200).json(profile[0]);
};

const createStudent = (req, res) => {

    alunoModel.createStudent(req.body);

    res.status(201).json({ message: 'Aluno Criado' });

};

const checkClasses = async (req, res) => {

    const student_id = req.params.id;

    const classes_infos = await alunoModel.checkClasses(student_id);

    return res.status(200).json(classes_infos)

}

module.exports = {
    getProfile,
    createStudent,
    checkClasses
};