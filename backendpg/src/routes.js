const express = require('express');
const knex = require('knex');
const connection =require('./database/connenction');

const routes = express.Router();


routes.get('/ongs', async (request,response) =>{

    const {nome} = request.query;
    const {id} = request.params;

    const ongs = await connection.select()
                                 .table('ongs');
                          

    // console.log(id);    
    // console.log(`Consuta de por query: ${nome}`);
    // //console.log(`Consuta de por query: ${idade}`);
    // return response.json({ mensagem: 'Helow word' });

    return response.json({ ongs });
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

