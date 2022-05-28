const {Model, DataTypes} = require('sequelize');

const sequelize = require('../config/connection.js');

class Comment extends Model {}

Comment.init({
    // define columns
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    body: {
        type: DataTypes.STRING,
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
});

module.exports = Comment;
