const connection = require('../database/connection');

module.exports = {
    async index (request,response){    
        const { page = 1 } = request.query;

        const [count]  = await connection('incidents')
        .count();
        
        console.log(count);
        
        const incidents = await connection('incidents')
        .join('ongs','omg_id','=','incidents.omg_id')
        .limit(5)
        .offset((page - 1) * 5)
        .select([
            'incidents.*',
            'ongs.name',
            'ongs.email',
            'ongs.whatsapp',
            'ongs.city',
            'ongs.uf'
        ]);
        
        response.header("X-Total-Count",count['count(*)'])
        return response.json(incidents);
    },
    async create(request,response){
        const { title, desc, value } = request.body;
        const omg_id = request.headers.authorization;
         //console.log(omg_id);
        const [id] = await  connection('incidents').insert({
            title,
            desc,
            value,
            omg_id,
        })
        return response.json({ id })
    },
    async delete (request,response){    
        const { id } = request.params;
        const omg_id = request.headers.authorization;

        const incidents = await connection('incidents').select('omg_id').where('id', id).first();
        
        if(incidents.omg_id !== omg_id){
            return response.status(401).json({ error: 'permisao negada' });
        }
        await connection('incidents').delete().where('id', id);
        //console.log(id);
        return response.status(204).send();
    },
}