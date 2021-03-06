const express = require('express');
const crypto = require('crypto');
const connection = require('./database/connection');
const routes = express.Router();
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

routes.get('/ongs',OngController.index);
routes.post('/ongs',OngController.create);
routes.delete('/ongs/:id',OngController.delete);

routes.get('/incidents',IncidentController.index);
routes.post('/incidents',IncidentController.create);
routes.delete('/incidents/:id',IncidentController.delete);

routes.get('/profile',ProfileController.index);
routes.get('/profileAll',ProfileController.indexAll);

routes.post('/session',SessionController.index);
routes.get('/sessionAll',SessionController.indexAll);

module.exports = routes;