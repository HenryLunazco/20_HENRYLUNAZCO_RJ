const mysql = require('mysql');
const express = require('express');
const path = require('path');
const cors = require('cors');

let conexion = mysql.createConnection({
    host: 'localhost',
    database: 'datos',
    user: 'henry',
    password: 'henry',
});

conexion.connect((err)=>{
    if(!err){
        console.log('conexion exitosa')
    }else{
        console.log('conexion fallida')
    }
});

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('server web')
});

app.use('/trabajo', express.static(path.join(__dirname, 'trabajo')))

app.get("/", function (req, res) {
    var filePath = path.join(__dirname, "/trabajo/index.html");
    res.sendFile(filePath);
  });
  app.get("/index.html", function (req, res) {
    var filePath = path.join(__dirname, "/trabajo/index.html");
    res.sendFile(filePath);
  });

app.listen(port, () => {
    console.log('ejecutado en el puerto: //44.194.55.177:3000')
})

