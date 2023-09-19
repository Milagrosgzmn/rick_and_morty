const {Favorites} = require('../DB_connection');

const deleteFavorite = async (id)=>{
    try {
        await Favorites.destroy({where: {id: id}});
        const favorites = await Favorites.findAll();
        return favorites;

    } catch (error) {   
        return false;
    }

};

module.exports = deleteFavorite;