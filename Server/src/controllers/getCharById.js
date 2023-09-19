const URL = 'https://rickandmortyapi.com/api/character/';
const axios = require('axios');

const getCharById = async(req, res)=>{

    const {id} = req.params;
    
    try {
        const {data} = await axios(URL+id);
        
        if(data){
            res.status(200);
            return res.json({
                id: data.id,
                status: data.status,
                name: data.name,
                species: data.specie,
                origin: data.origin?.name,
                image: data.image,
                gender: data.gender,
            });
        }
        res.status(404).send(new Error('Not found'));
    } catch (error) {
        res.status(500).send(new Error(error.message));
    }
    
};

module.exports = getCharById;