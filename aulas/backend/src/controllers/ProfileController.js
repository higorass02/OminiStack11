const connection = require('../database/connection');

module.exports = {
    async index (request,response){    
        const omg_id = request.headers.authorization;
        const incidents = await connection('incidents').select('*').where('omg_id', omg_id).first();
        return response.json(incidents);
    },
}