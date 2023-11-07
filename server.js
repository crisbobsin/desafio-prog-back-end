const express = require('express');
const server = express();

const hostname = '127.0.0.1';
const port = 3000;

server.get('/', (request, response) => {
    response.status(200).send('Hello World!')
});

server.listen(port, hostname, () => {
    console.log(`Servidor em execução em http://${hostname}:${port}`)
});