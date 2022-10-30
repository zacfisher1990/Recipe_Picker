const router = require('express').Router();

const api = require('./api');
const recipeRoutes = require('./api/recipe-routes');

const { login } = require('../controllers/loginController');
const { home } = require('../controllers/homeController');
const { register } = require('../controllers/registerController');

router.get('/', login);
router.get('/homepage', home);
router.get('/register', register);

router.use('/api', api);
router.use('./recipe-routes', recipeRoutes);

router.use((req, res) => {
    res.send("<h1>wrong route</h1>")
});

module.exports = router;