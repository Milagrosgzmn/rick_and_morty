const {Favorites} = require('../DB_connection');
const {Users} = require('../DB_connection');

const addFav = async (req)=>{

    const { name, id, userId, origin, status, image, species, gender} = req.body;
        if (!name || !id) {
            return res.status(401).send('Incomplete data');
        }

    try {
        const fav = await Favorites.create({name, id, origin: origin?.name, status, image, species, gender});
        const user = await Users.findByPk(userId)
        
        await user.addFavorites(fav.id);

        const  allFavs= await user.getFavorites({
            attributes: ['id', 'name', 'status', 'species', 'gender', 'image', 'origin'],
        });
        return allFavs;
    
    } catch (error) {
        console.error('Error '+error.message);
        return false;
    }

};

module.exports = addFav;