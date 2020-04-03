const express = require('express');

const routes = express.Router();

routes.get('/user/:id',(request,response) =>{

    const {nome} = request.query;
    const {id} = request.params;

    console.log(id);    
    console.log(`Consuta de por query: ${nome}`);
    //console.log(`Consuta de por query: ${idade}`);
    return response.json({ mensagem: 'Helow word' });
});

routes.post('/user/:id',(request,response) =>{

    const {nome} = request.query;
    const {id} = request.params;
    const {sobre,nascimento} = request.body;

    console.log(id);    
    console.log(`Consuta de por query: ${nome}`);
    console.log(`Consuta de por query: ${sobre} ${nascimento}`);
    return response.json({ mensagem: 'Helow word' });
});

module.exports = routes

