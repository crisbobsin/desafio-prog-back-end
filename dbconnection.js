var mysql = require('mysql');

var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '19081999',
    database: 'desafio_g50_t67'
});

module.exports = connection;