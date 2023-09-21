const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Users', {
      id:{
         type: DataTypes.UUID,
         defaultValue: DataTypes.UUIDV4, 
         primaryKey: true,
      },
      email:{
         type: DataTypes.STRING,
         unique:true,
         allowNull: false,
         validate:{
            isEmail: true,   
         }
      },
      password:{
         type:DataTypes.STRING,
         allowNull: false,
      }
   }, { timestamps: false });
};
