const express = require('express');
const alunoController = require('./controllers/alunoController');
const disciplinaController = require('./controllers/disciplinaController');
const inscricoesController = require('./controllers/inscricoesController');

const router = express.Router();

// --------------------------------------------------------------------------------------------//

router.get('/aluno/:id', alunoController.getProfile);
router.post('/criar-aluno', alunoController.createStudent);
router.get('/turma-aluno/:id', alunoController.checkClasses)

router.get('/inscricoes', inscricoesController.getInscricoesByAluno);

router.get('/disciplina', disciplinaController.getAll);
router.post('/disciplina', disciplinaController.addSingle);
router.delete('/disciplina', disciplinaController.deleteSingle);

module.exports = router;