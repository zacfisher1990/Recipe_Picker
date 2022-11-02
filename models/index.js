const Recipe = require('./Recipe');
const User = require('./User');

User.hasMany(Recipe, {foreignKey: "user_id"})
Recipe.belongsTo(User, {foreignKey: "user_id"})

module.exports = {
    Recipe,
    User,
};