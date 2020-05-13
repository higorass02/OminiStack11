const connection = require('../database/connection');

module.exports = {
    async index (request,response){    
        const { id } = request.body;

        const ongs = await connection('ongs')
        .where('id',id)
        .select('name')
        .first();

        if(!ongs){
            return response.status(401).json({ error: 'No Ong found with this ID' });
        }
        return response.json(ongs);
    },
    
    async indexAll (request,response){    
        const { id } = request.body;

        const ongs = await connection('ongs')
        .select('*');

        if(!ongs){
            return response.status(401).json({ error: 'No Ong found with this ID' });
        }
        return response.json(ongs);
    },
}