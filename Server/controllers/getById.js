const URL = 'https://rickandmortyapi.com/api/character/';
const axios = require('axios');

const getById = async (id)=>{

    try {
        const {data} = await axios(URL+id);
        
        if(data){
            const character = {
                id: data.id,
                status: data.status,
                name: data.name,
                species: data.species,
                origin: data.origin?.name,
                image: data.image,
                gender: data.gender,
            };
            return character;
        }
        return false
    } catch (error) {
        return false
    }
}   

module.exports = getById