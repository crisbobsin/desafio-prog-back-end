const loginModel = require('../models/loginModel');
const db = require('../models/dbconnection');
const jwt = require('jsonwebtoken');

const verifyJwt = (req, res, next) => {
    
    /* A função jwt.verify é usada para verificar a validade e autenticidade de um token JWT.
    1. Verifica a assinatura do token usando a chave secreta fornecida. Isso garante que o token não tenha sido modificado por terceiros.
    2. Verifica se o token ainda está dentro do período de validade definido no momento da sua criação.
    3. Verifica se o token foi emitido por uma fonte confiável, comparando-o com a chave secreta fornecida. */
    const token = req.headers['x-access-token'];
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        
        if(err) {
            return res.status(401).end();
        } else {
            req.userId = decoded.userId;
            req.userLogin = decoded.userLogin;
            next();
        }

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

    /* Condição que verifica se o login foi bem sucedido ou não */
    if (resultadoLogin) {
        /* Função sign recebe um payload (Dados contidos no próprio token que contém informações do usuário),
        o secret de autenticação e um outro parâmetro que informa o tempo em que o token ficará ativo */
        const token = jwt.sign({ userId: resultadoLogin.id, userLogin: resultadoLogin.login}, auth_secret, { expiresIn: '9999 years' })
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