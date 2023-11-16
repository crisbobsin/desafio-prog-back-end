const loginModel = require('../models/loginModel');
const jwt = require('jsonwebtoken');

const verifyJwt = (req, res, next) => {
    
    const token = req.headers['x-access-token'];
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        
        if(err) return res.status(401).end();

        req.userId = decoded.userId;
        next();

    })

};

const login = async (req, res) => {
    
    const auth_secret = process.env.SECRET;

    const resultadoLogin = await loginModel.loginCheck(req.body);
    console.log(resultadoLogin);

    if (resultadoLogin) {
        const token = jwt.sign({ userId: resultadoLogin.id }, auth_secret, { expiresIn: 300 })
        return res.status(200).json({ auth: true, token });
    } else {
        return res.status(401).json({ mensagem: 'Credenciais inválidas' });
    }

};

module.exports = {
    login,
    verifyJwt
}