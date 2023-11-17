const profileModel = require('../models/profileModel')

/* Função que chama o getProfile para receber o objeto do perfil do usuário logado. */
const getProfile = async (req, res) => {

    const user_id = req.userId;
    const user_login = req.userLogin;

    const profile = await profileModel.getProfile(user_id, user_login);

    return res.status(200).json(profile);

};

module.exports = {
    getProfile
}