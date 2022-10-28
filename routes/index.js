const router = require('express').Router();

const api = require('./api');
const { login } = require('../controllers/loginController');
const { home } = require('../controllers/homeController');

router.get('/', login);
router.get('/homepage', home);

//router.use('/api', api);

const recipeRoutes = require('./api/recipe-routes');
//router.use('./recipe-routes', recipeRoutes);

module.exports = router;