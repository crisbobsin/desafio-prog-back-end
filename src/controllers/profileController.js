const profileModel = require('../models/profileModel')

const getProfile = async (req, res) => {

    const user_id = req.userId;
    const user_login = req.userLogin;

    const profile = await profileModel.getProfile(user_id, user_login);

    return res.status(200).json(profile);

};

module.exports = {
    getProfile
}