const router = require('express').Router();

const api = require('./api');
const { home } = require('../controllers/homeController');

router.get('/', home);
//router.use('/api', api);

const recipeRoutes = require('./api/recipe-routes');
router.use('./recipe-routes', recipeRoutes);

module.exports = router;