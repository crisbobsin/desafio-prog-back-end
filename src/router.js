const express = require('express');
const alunoController = require('./controllers/alunoController');

const router = express.Router();

// --------------------------------------------------------------------------------------------//

router.get('/aluno', alunoController.getAll);

/* router.post('/add-turma', function(req, res){
    nova_turma = {
        'disciplina': req.body.disciplina,
        'turma': parseInt(req.body.turma)
    }
    turmas.push(nova_turma)
    res.send(turmas)
});

router.delete('/del-turma/:turma', function(req, res){
    let turma_param = parseInt(req.params.turma)
    for(let index = 0; index < turmas.length ;index ++){
        if(turmas[index]['turma'] == turma_param){
            turmas.splice(index, 1)
        }
    }
    res.send(turmas)
}); */

module.exports = router;