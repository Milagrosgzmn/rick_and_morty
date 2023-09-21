require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const UserModel = require('./models/User');
const FavoriteModel = require('./models/Favorite');

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
   { logging: false, native: false }
);

UserModel(sequelize);
FavoriteModel(sequelize);

const { Users, Favorites } = sequelize.models;

Users.belongsToMany(Favorites, { through: 'user_favorite' })
Favorites.belongsToMany(Users, { through: 'user_favorite' })

module.exports = {
    Users,
    Favorites,
    conn: sequelize,
};
