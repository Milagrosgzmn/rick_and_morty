const addFav = require('../controllers/addFav');

const postFav = async ( req, res)=>{

    try {
       const favs = await addFav(req)
       return favs ? res.status(200).json(favs) : res.status(400).json('Error adding favorite.')
    } catch (error) {
        return res.status(400).json('Couldnt add favorite')
    }
};

module.exports = postFav;