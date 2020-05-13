const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const ong_id = req.headers.authorization;
    
        const incidents = await connection('incidents')
          .where('omg_id', ong_id)
          .select('*');
    
          return res.json(incidents);
    },
    async indexAll (request,response){    
        const omg_id = request.headers.authorization;
        const incidents = await connection('incidents').select('*');
        return response.json(incidents);
    },
}