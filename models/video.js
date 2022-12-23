'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Video extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.channelId = this.belongsTo(models.Channel, {foreignKey: 'channel_id'});
    }
  }
  Video.init({
    title:{
        type:DataTypes.STRING,
        allowNull:false
      },
      channel_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
          model:'channel',
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
    modelName:'Video',
    tableName:'video',
    freezeTableName:true,
    modelName: 'Video',
  });
  return Video;
};