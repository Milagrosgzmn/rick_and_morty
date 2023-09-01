const getById = require('../Controllers/getById')

const getCharById = async (req, res) =>{

    const {id} = req.params;
    try {
        const character = await getById(id)
        if(character){
            return res.status(200).json(character)
        }
        throw new Error('not found');
    } catch (error) {
        return res.status(400).json(error.message)
    }
}

module.exports = getCharById