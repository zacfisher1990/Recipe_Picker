const sequelize = require('../config/index');
const { User } = require('../models');
const seedRecipes = require('./recipe-seeds');

const userData = require('./userData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedRecipes();
    console.log('\n----- RECIPES SEEDED -----\n');

    await User.bulkCreate(userData, {
        individualHooks: true,

        returning: true,
    });

    process.exit(0);
};

seedDatabase();