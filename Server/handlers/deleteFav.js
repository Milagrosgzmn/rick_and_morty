const deleteFavorite = require('../controllers/deleteFavorite');

const deleteFav = async(req, res)=>{
    let {id} = req.params;
    id= id.split('_');
    const favId = Number(id[0]);
    const userId =id[1];
    
    try {
        const remainingFavs = await deleteFavorite(favId, userId);
        return remainingFavs ? res.status(200).json(remainingFavs) : res.status(400).json('Error deleting favorite.');

    } catch (error) {
        return res.status(400).json('Error ', error.message);
    }

};

module.exports = deleteFav;