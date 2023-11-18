/* Aqui no router nós fazemos nossas rotas e as funções que elas utilizarão para
fazer consultas no banco de dados e retornar ao usuário uma response */

const express = require('express');

const alunoController = require('./controllers/alunoController');
const disciplinaController = require('./controllers/disciplinaController');
const profileController = require('./controllers/profileController');
const loginController = require('./controllers/loginController');
const inscricaoController = require('./controllers/inscricaoController');
const turmaController = require('./controllers/turmaController');

const router = express.Router();

// --------------------------------------------------------------------------------------------//

router.get('/perfil', loginController.verifyJwt, profileController.getProfile);

router.post('/criar-aluno', loginController.verifyJwt, alunoController.createStudent);
router.delete('/cancelar-inscricao', loginController.verifyJwt, inscricaoController.unsubscribeClass);

router.post('/login', loginController.login);

router.get('/turmas', loginController.verifyJwt,  turmaController.checkClasses);
router.post('/inscrever', loginController.verifyJwt, inscricaoController.subscribeClass);

router.get('/disciplina', disciplinaController.getAll);
router.post('/disciplina', disciplinaController.addSingle);
router.delete('/disciplina', disciplinaController.deleteSingle);

module.exports = router;