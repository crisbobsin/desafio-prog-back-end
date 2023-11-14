const app = require('./app')
const dotenv = require('dotenv')

dotenv.config()

const host = 'localhost';
const port = process.env.PORT;

app.listen(port, host, () => {
    console.log(`http://${host}:${port}`)
});