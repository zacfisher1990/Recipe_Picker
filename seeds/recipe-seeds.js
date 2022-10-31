const { Recipe } = require('../models');

const recipeData = [
  {
    recipe_name: 'pizza',
    user_id: 1,
  },
];

const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;