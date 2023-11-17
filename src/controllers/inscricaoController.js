const inscricaoModel = require('../models/inscricaoModel')

/* Função que chama a função de checar as turmas do modelo inscrição, retornando um
array com objetos das turmas inscritas */
const checkClasses = async (req, res) => {

    const user_id = req.userId;

    const classes_infos = await inscricaoModel.checkClasses(user_id);

    return res.status(200).json(classes_infos)

};

/* Função responsável por chamar a função de inscrição do modelo de inscrição,
Na sequencia chamando a função para retornar as turmas inscritas, assim possibilitando
o aluno logado chegar se a inscrição foi bem sucedida */
const subscribeClass = async (req, res) => {

    const user_id = req.userId;
    const class_num = req.body.numero_turma;

    inscricaoModel.subscribeClass(user_id, class_num);

    await checkClasses(req, res)

};

/* Função responsável por chamar a função de cancelar inscrição do modelo de inscrição,
Na sequencia chamando a função para retornar as turmas inscritas, assim possibilitando
o aluno logado chegar se a remoção foi bem sucedida */
const unsubscribeClass = async (req, res) => {

    const user_id = req.userId;
    const class_number = req.body.numero_turma

    inscricaoModel.unsubscribeClass(user_id, class_number);

    await checkClasses(req, res)

}

module.exports = {
    checkClasses,
    subscribeClass,
    unsubscribeClass
}