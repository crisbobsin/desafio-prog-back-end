const express = require('express');

const alunoController = require('./controllers/alunoController');
const disciplinaController = require('./controllers/disciplinaController');
const inscricoesController = require('./controllers/inscricoesController');
const profileController = require('./controllers/profileController');
const loginController = require('./controllers/loginController');

const router = express.Router();

// --------------------------------------------------------------------------------------------//

router.get('/perfil', loginController.verifyJwt, profileController.getProfile);

router.post('/criar-aluno', loginController.verifyJwt, alunoController.createStudent);
router.get('/turma-aluno', loginController.verifyJwt,  alunoController.checkClasses);
router.delete('/unsubscribe-class', loginController.verifyJwt, alunoController.unsubscribeClass);

router.post('/login', loginController.login);

router.get('/inscricoes', inscricoesController.getInscricoesByAluno);

router.get('/disciplina', disciplinaController.getAll);
router.post('/disciplina', disciplinaController.addSingle);
router.delete('/disciplina', disciplinaController.deleteSingle);

module.exports = router;