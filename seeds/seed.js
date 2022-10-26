const sequelize = require('../config/index');
const { User } = require('../models');

const userData = require('./userData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,

        returning: true,
    });

    process.exit(0);
};

seedDatabase();