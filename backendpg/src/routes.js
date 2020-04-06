const express = require('express');
const crypto = require('crypto');

const connection = require('./database/connection');

const routes = express.Router();

routes.get('/ongs', async (request,response) =>{

    const {nome} = request.query;
    const {id} = request.params;
     
    const ongs = await connection.select()
                                  .withSchema('medpoint')
                                 .table('ongs');
    return response.json({ ongs });
});

routes.post('/ongs',async (request,response) =>{
   
  console.log('passou aqui');  
  const { name, email, whatsapp, city, uf } = request.body;
   
   const id = crypto.randomBytes(4).toString('HEX'); 
   await connection('ongs')
             .withSchema('medpoint')
             .insert({
                     id,
                     name,
                     email,
                     whatsapp,
                     city,
                     uf
                   });
  
   return response.json({id});
});

module.exports = routes

