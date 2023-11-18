const inscricaoModel = require('../models/inscricaoModel');
const turmaController = require('./turmaController')

/* Função responsável por chamar a função de inscrição do modelo de inscrição,
Na sequencia chamando a função para retornar as turmas inscritas, assim possibilitando
o aluno logado chegar se a inscrição foi bem sucedida */
const subscribeClass = async (req, res) => {

    const user_id = req.userId;
    const user_registration = req.userRegistration;
    const class_num = req.body.numero_turma;

    await inscricaoModel.subscribeClass(user_id, user_registration, class_num);

    turmaController. checkClasses(req, res)

};

/* Função responsável por chamar a função de cancelar inscrição do modelo de inscrição,
Na sequencia chamando a função para retornar as turmas inscritas, assim possibilitando
o aluno logado chegar se a remoção foi bem sucedida */
const unsubscribeClass = async (req, res) => {

    const user_id = req.userId;
    const user_registration = req.userRegistration;
    const class_number = req.body.numero_turma

    await inscricaoModel.unsubscribeClass(user_id, user_registration, class_number);

    turmaController.checkClasses(req, res)

}

module.exports = {
    subscribeClass,
    unsubscribeClass
}