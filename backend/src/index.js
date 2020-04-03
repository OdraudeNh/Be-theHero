const express = require('express');
const routes = require('./routes');
const eduardo = 'w';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/*
Rota e recursos
*/

/*
Método Http
GET: buscar/listar uma informação no backe-nd
POST: Criar uma informação no back-end
PUT: Alterar uma informação no back-end
DELETE: Deletar uma informação no back-end
*/

/*
Tipos de parâmetros
Query params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
Route Params: Parâmetros utilizados para identificar recursos
Request body: Corpo da requisição, utilizado para criar ou alterar recursos


*/
/* 
SQL: MySQL SQLite, Postgree, Oracle, Microsoft SQL Server
NoSQL: Mongo, CouchDB, etc
*/
/*
Driver: SELECT * FROM users
Query Builder: table ('users'), select('*'), where()
*/



app.listen(3333);
