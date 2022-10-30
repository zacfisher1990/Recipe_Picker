const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/index');
const User = require('./User');

class Recipe extends Model {}

Recipe.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        }
    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'recipe',
    }
);

module.exports = Recipe;