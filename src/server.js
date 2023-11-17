/* Criação do nosso web server usando o Express (Presente no app.js que foi importado)
Utilizamos de criar um arquivo .env para as informações de conexão e outras variáveis sensíveis não irem para o github*/

const app = require('./app')
const dotenv = require('dotenv')

dotenv.config()

const host = 'localhost';
const port = process.env.PORT;

app.listen(port, host, () => {
    console.log(`http://${host}:${port}`)
});