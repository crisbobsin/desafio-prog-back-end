const disciplinaModel = require('../models/disciplinaModel');

const getAll = async (req, res) => {
    const disciplinas = await disciplinaModel.read();
    return res.status(200).json(disciplinas);
};

const addSingle = (req, res) => {
    disciplinaModel.create(req.body);
    return res.status(201).json({ message: "ok"});
};

const deleteSingle = (req, res) => {
    disciplinaModel.del(req.query.id);
    return res.status(200).json({ message: "ok"});
};

module.exports = { 
    getAll,
    addSingle,
    deleteSingle
};