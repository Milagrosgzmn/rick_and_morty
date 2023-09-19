const deleteFavorite = require('../Controllers/deleteFavorite');

const deleteFav = async(req, res)=>{
    const {id} = req.body;
    
    try {
        const remainingFavs = deleteFavorite(id);
    
        return remainingFavs ? res.status(200).json(remainingFavs) : res.status(400).json('Error deleting favorite.');

    } catch (error) {
        return res.status(400).json('Error ', error.message);
    }

};

module.exports = deleteFav;