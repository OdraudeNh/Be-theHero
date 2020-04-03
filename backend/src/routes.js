const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

    
    //const data = request.body;
    //console.log(data);

module.exports = routes;

/*ONG Database

-Entidades
Ong
Casos(incidem)

-Funcionalidades
Login ONG
Logout Ong
Cadastro de Ong
Cadastrar novos Casos
Deleter Casos
Listar Casos específicos de uma Ong,
Listar todos os casos
Entrar em contato com a Ong

*/