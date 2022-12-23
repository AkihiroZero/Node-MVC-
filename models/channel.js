'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Channel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.userId = this.belongsTo(models.User, {
        foreignKey: 'user_id',
      });
    }
  }
  Channel.init({
    name:{
        type:DataTypes.STRING,
        allowNull:false,
      },
      user_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
          model:'user',
          key:'id',
        }
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
  }, {
    sequelize,
    modelName:'Channel',
    tableName:'channel',
    freezeTableName: true,
    modelName: 'Channel',
  });
  return Channel;
};