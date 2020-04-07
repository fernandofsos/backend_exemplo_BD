const connection = require('../database/connection');
const crypto = require('crypto');


async function index (request,response){
    const ongs = await connection.select().withSchema('medpoint').table('ongs');

    return response.json({ ongs });
}


async function create (request,response) {
   const { name, email, whatsapp, city, uf } = request.body;
   
   const id = crypto.randomBytes(4).toString('HEX'); 
   await connection('ongs').withSchema('medpoint').insert({ id,
                                                            name,
                                                            email,
                                                            whatsapp,
                                                            city,
                                                            uf
                                                          });
   return response.json({id});
}

module.exports = { create, index }