/* Aqui criamos nosso App usando o módulo Express, e o BodyParser para nos auxiliar a ler em Json nosso body
Implementamos também ao código, para não poluir nosso app.js, o router.js para armazenar nossas rotas */

const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(router);

module.exports = app;