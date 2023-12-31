const disciplinaModel = require('../models/disciplinaModel');
const loginController = require('./loginController');

const getAll = async (req, res) => { 
    const disciplinas = await disciplinaModel.read();
    return res.status(200).json(disciplinas[0]);
};

const addSingle = async (req, res) => {

    const user_id = req.userId;
    const user_login = req.userLogin;
    const checkAdmin = await loginController.verifyAdmin(user_id, user_login);

    if(checkAdmin){
        disciplinaModel.create(req.body);
        return res.status(201).json({ message: "ok"});
    } else {
        return res.status(401).json({ message: 'Apenas Admins podem criar uma disciplina' })
    }
};

const deleteSingle = async (req, res) => {

    const user_id = req.userId;
    const user_login = req.userLogin;
    const checkAdmin = await loginController.verifyAdmin(user_id, user_login);

    if(checkAdmin){
        
        const result = await disciplinaModel.del(req.body.id);

        if(result){
            console.log("Deletado.");
            return res.status(200).json({ message: "ok"});
        } else {
            return res.status(200).json({ message: `Não foi possível deletar a disciplina ${req.body.id} pois há turmas associadas` });
        }

    } else {
        return res.status(401).json({ message: 'Apenas Admins podem deletar uma disciplina' })
    }



    
};

module.exports = { 
    getAll,
    addSingle,
    deleteSingle
};