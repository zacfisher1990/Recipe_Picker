const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/index');

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
    savedRecipesMonday: {
      type: DataTypes.STRING,
      allowNull: true
    },
    savedRecipesTuesday: {
      type: DataTypes.STRING,
      allowNull: true
    },
    savedRecipesWednesday: {
      type: DataTypes.STRING,
      allowNull: true
    },
    savedRecipesThursday: {
      type: DataTypes.STRING,
      allowNull: true
    },
    savedRecipesFriday: {
      type: DataTypes.STRING,
      allowNull: true
    },
    savedRecipesSaturday: {
      type: DataTypes.STRING,
      allowNull: true
    },
    savedRecipesSunday: {
      type: DataTypes.STRING,
      allowNull: true
    },
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
