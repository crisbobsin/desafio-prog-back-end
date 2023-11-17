const loginModel = require('../models/loginModel');
const db = require('../models/dbconnection');
const jwt = require('jsonwebtoken');

const verifyJwt = (req, res, next) => {
    
    const token = req.headers['x-access-token'];
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        
        if(err) return res.status(401).end();

        req.userId = decoded.userId;
        req.userLogin = decoded.userLogin;
        next();

    })

};

// Função criada para ser usada dentro de outros controllers para validar se o login ativo é ADM ou não
const verifyAdmin = async (user_id, user_login) => {

    // Utiliza o ID e Login do usuário logado para checar se existe o ID com o respectivo LOGIN no banco de dados de professor
    const checkAdmin = await db.query('SELECT admin FROM professor WHERE id = (?) AND login = (?)', [user_id, user_login]);

    // Verifica se o professor tem permissões de ADM
    try {
        if (checkAdmin[0][0]['admin'] == 1) {
            return true
        } else {
            return false
        }
    } catch (error) {
        return false
    }    

};


const login = async (req, res) => {
    
    const auth_secret = process.env.SECRET;

    const resultadoLogin = await loginModel.loginCheck(req.body);

    if (resultadoLogin) {
        const token = jwt.sign({ userId: resultadoLogin.id, userLogin: resultadoLogin.login }, auth_secret, { expiresIn: 86400 })
        return res.status(200).json({ auth: true, token });
    } else {
        return res.status(401).json({ mensagem: 'Credenciais inválidas' });
    }

};

module.exports = {
    login,
    verifyJwt,
    verifyAdmin
}