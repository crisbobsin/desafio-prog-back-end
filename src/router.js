const express = require('express');
const alunoController = require('./controllers/alunoController');
const disciplinaController = require('./controllers/disciplinaController');
const inscricoesController = require('./controllers/inscricoesController');
const loginController = require('./controllers/loginController');

const router = express.Router();

// --------------------------------------------------------------------------------------------//

router.get('/aluno/', loginController.verifyJwt, alunoController.getProfile);
router.post('/criar-aluno', alunoController.createStudent);
router.post('/turma-aluno/:id', alunoController.checkClasses)

router.post('/login', loginController.login)

router.get('/inscricoes', inscricoesController.getInscricoesByAluno);

router.get('/disciplina', disciplinaController.getAll);
router.post('/disciplina', disciplinaController.addSingle);
router.delete('/disciplina', disciplinaController.deleteSingle);

module.exports = router;