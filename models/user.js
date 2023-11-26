'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Users extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Users.init({
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        display_name: DataTypes.STRING,
        bio: DataTypes.TEXT,
        date_of_birth: DataTypes.DATE,
        // created_at: DataTypes.DATE,
        plus_verified: DataTypes.DATE,
        // updated_at: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'Users',
    });
    return Users;
};