const { Recipe } = require('../models');

const recipeData = [
  {
    recipe_name: 'pizza',
    user_id: 1,
  },
  {
    recipe_name: 'pizza',
    user_id: 5,
  }
];

const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;