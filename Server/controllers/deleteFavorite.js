const {Favorites, Users} = require('../DB_connection');

const deleteFavorite = async (id, userId)=>{
    try {
        const user = await Users.findOne({where: {id: userId}});
        const fav = await Favorites.findByPk(id);
        await Favorites.destroy({where:{id:id}})
        await user.removeFavorites(fav);
        const favorites = await user.getFavorites({
            attributes: ['id', 'name', 'status', 'species', 'gender', 'image', 'origin'],
        });
        return favorites;

    } catch (error) {   
        return false;
    }

};

module.exports = deleteFavorite;