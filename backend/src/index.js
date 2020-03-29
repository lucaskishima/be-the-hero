const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/*
* Tipos de parâmetros:
*
* Query params: parâmetros nomeados enviados na rota após "?" (filtros, paginação) ex: /users?name=Diego
* Route params: parâmetro utilizados para identificar recursos. Ex: '/users/:id'
* Request body: utilizado para criar ou alterar recursos
*/


app.listen(3333);