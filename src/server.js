const app = require('./app')
const dotenv = require('dotenv')

dotenv.config()

const host = '127.0.0.1';
const port = process.env.PORT;

app.listen(port, host, () => {
    console.log(`http://${host}:${port}`)
});