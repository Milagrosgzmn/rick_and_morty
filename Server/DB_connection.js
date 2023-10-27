require('dotenv').config();
const { Sequelize } = require('sequelize');

const UserModel = require('./models/User');
const FavoriteModel = require('./models/Favorite');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DATABASE_URL} = process.env;

const conection = DATABASE_URL || `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;

const sequelize = new Sequelize(`${conection}`,
   { logging: false, native: false, ssl:true }
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
