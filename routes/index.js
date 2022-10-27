const router = require('express').Router();

const api = require('./api');
const { login } = require('../controllers/loginController');

router.get('/', login);
//router.use('/api', api);

module.exports = router;