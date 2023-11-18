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

router.post('/login', loginController.login);

router.get('/perfil', loginController.verifyJwt, profileController.getProfile);

router.post('/criar-aluno', loginController.verifyJwt, alunoController.createStudent);

router.post('/inscrever', loginController.verifyJwt, inscricaoController.subscribeClass);
router.delete('/cancelar-inscricao', loginController.verifyJwt, inscricaoController.unsubscribeClass);

router.get('/ver-disciplinas', loginController.verifyJwt, disciplinaController.getAll);
router.post('/criar-disciplina', loginController.verifyJwt, disciplinaController.addSingle);
router.delete('/deletar-disciplina', loginController.verifyJwt, disciplinaController.deleteSingle);

router.get('/turmas-usuario', loginController.verifyJwt,  turmaController.checkClasses);
router.delete('/deletar-turma', loginController.verifyJwt, turmaController.deleteClass)
router.post('/atualizar-turno-turma', loginController.verifyJwt, turmaController.updateSchedule);
router.post('/atualizar-professor-turma', loginController.verifyJwt, turmaController.updateProfessor);
router.get('/ver-turmas', loginController.verifyJwt, turmaController.getClasses);
router.post('/criar-turma', loginController.verifyJwt, turmaController.createClass);

module.exports = router;