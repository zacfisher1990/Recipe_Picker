const router = require('express').Router();

const api = require('./api');
const { home } = require('../controllers/homeController');

router.get('/', home);
router.use('/api', api);

module.exports = router;