const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors());
//pegar o corpo da requisisao para pegar parametros
app.use(express.json());
app.use(routes);
app.listen('3333');