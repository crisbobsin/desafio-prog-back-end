let mysql = require('mysql');

let connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '19081999',
    database: 'desafio_g50_t67'
});

module.exports = connection;