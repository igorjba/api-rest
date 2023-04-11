const express = require('express');
const routes = require('./routes');
const app = express();

//como o express não tem mais o json, temos que importar o body-parser e usar o json dele no express para ele entender o json 
//que vem no corpo da requisição 
// const bodyParser = require('body-parser');
// app.use(bodyParser.json());
//para usar o json no express, temos que usar o express.json()

app.use(express.json());

app.use(routes);

app.listen(3000);

