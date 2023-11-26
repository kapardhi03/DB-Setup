'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Retweet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Retweet.init({
    user_id: DataTypes.BIGINT,
    post_id: DataTypes.BIGINT,
    retweet_comment: DataTypes.TEXT,
    timestamp: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Retweet',
  });
  return Retweet;
};