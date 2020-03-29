const express = require('express');
const routes = require('./routes');
const app = express();

//pegar o corpo da requisisao para pegar parametros
app.use(express.json());
app.use(routes);
app.listen('3333');