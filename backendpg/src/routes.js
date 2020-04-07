const express = require('express');

const Ongcontroller = require('./controllers/Ongcontroller');

const routes = express.Router();

routes.get('/ongs', Ongcontroller.index);
routes.post('/ongs', Ongcontroller.create);

module.exports = routes

