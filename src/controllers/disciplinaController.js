const disciplinaModel = require('../models/disciplinaModel');

const add = (req, res) => {

    disciplinaModel.add(req.body);

    return res.status(201).json({ message: "ok"});

};

module.exports = { add };