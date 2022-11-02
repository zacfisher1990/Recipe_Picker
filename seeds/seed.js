const sequelize = require('../config/index');
const { User, Recipe } = require('../models');
// const seedRecipes = require('./recipe-seeds.js');


const userData = require('./userData.json');
const recipeData = require('./recipeData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    
    const user = await User.bulkCreate(userData, {
        individualHooks: true,

        returning: rue,
    });
    console.log("user seed")
    // await seedRecipes();
    await Recipe.bulkCreate(recipeData, {

        individualHooks: true,
        returning: true,


    });
    console.log("recipe seeded")
    // for (const recipe of recipeData){await Recipe.create({recipe, user_id: user[Math.floor(Math.random() * user.length)].id })}
   
    // for (const recipe of recipeData){await Recipe.create({recipe, user_id: 1 })}

    process.exit(0);
};

seedDatabase();