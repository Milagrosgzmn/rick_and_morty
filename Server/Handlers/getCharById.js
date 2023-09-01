const getById = require('../Controllers/getById')

const getCharById = async (req, res) =>{

    const {id} = req.body;
    try {
        const character = await getById(id)
        if(character){
            return res.status(200).json(character)
        }
    } catch (error) {
        return res.status(400).json(error.message)
    }
}

module.exports = getCharById