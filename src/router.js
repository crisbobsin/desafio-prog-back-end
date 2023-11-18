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

router.get('/ver-disciplinas', loginController.verifyJwt, disciplinaController.getAll);
router.post('/criar-disciplina', loginController.verifyJwt, disciplinaController.addSingle);
router.delete('/cancelar-disciplina', loginController.verifyJwt, disciplinaController.deleteSingle);

router.post('/atualizar-turno-turma', loginController.verifyJwt, turmaController.updateSchedule);
router.post('/atualizar-professor-turma', loginController.verifyJwt, turmaController.updateProfessor);

module.exports = router;