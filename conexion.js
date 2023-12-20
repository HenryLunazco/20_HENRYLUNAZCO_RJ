const { Console } = require('console');
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('server web')
});

app.use('/trabajo', express.static(path.join(__dirname, 'trabajo')))

app.listen(port, () => {
    console.log('ejecutado en el puerto ${port}')
})