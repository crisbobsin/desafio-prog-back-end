const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// --------------------------------------------------------------------------------------------//

const turmas = [
    {
        'disciplina': 'Programação Back End',
        'turma': 11
    },
    {
        'disciplina': 'Laboratório II',
        'turma': 12
    },
    {
        'disciplina': 'Banco de Dados',
        'turma': 13
    },
    {
        'disciplina': 'Herbologia',
        'turma': 14
    }
];

// --------------------------------------------------------------------------------------------//

app.get('/turmas', function(req, res){
    res.send(turmas)
});

app.post('/add-turma', function(req, res){
    nova_turma = {
        'disciplina': req.body.disciplina,
        'turma': parseInt(req.body.turma)
    }
    turmas.push(nova_turma)
    res.send(turmas)
});

app.delete('/del-turma/:turma', function(req, res){
    let turma_param = parseInt(req.params.turma)
    for(let index = 0; index < turmas.length ;index ++){
        if(turmas[index]['turma'] == turma_param){
            turmas.splice(index, 1)
        }
    }
    res.send(turmas)
});

// --------------------------------------------------------------------------------------------//

const host = '127.0.0.1';
const port = 3000;
app.listen(port, host, () => {
    console.log(`http://${host}:${port}`)
});