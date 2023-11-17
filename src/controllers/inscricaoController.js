const inscricaoModel = require('../models/inscricaoModel')

const checkClasses = async (req, res) => {

    const user_id = req.userId;

    const classes_infos = await inscricaoModel.checkClasses(user_id);

    return res.status(200).json(classes_infos)

};

const subscribeClass = async (req, res) => {

    const user_id = req.userId;
    const class_num = req.body.numero_turma;

    inscricaoModel.subscribeClass(user_id, class_num);

    await checkClasses(req, res)

}

module.exports = {
    checkClasses,
    subscribeClass
}