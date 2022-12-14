const router = require('express').Router();
const { User } = require('../../models');

// CREATE new user
router.post('/', async (req, res) => {
    try {
      const userData = await User.create({
        email: req.body.email,
        password: req.body.password,
      });
  
      // Set up sessions with a 'loggedIn' variable set to `true`
      req.session.save(() => {
        req.session.loggedIn = true;
  
        res.status(200).json(userData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });


// Login
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({where: { email: req.body.email } });
        if (!userData) {
            res
            .status(400)
            .json({message: 'Incorrect email or password, please try again' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if(!validPassword) {
            res
            .status(400)
            .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        // Once the user successfully logs in, set up the sessions variable 'loggedIn'
        req.session.save(()=>{
            req.session.user_id = userData.id;
            req.session.logged_in = true;
      
            res.json({ user: userData, message: 'You are now logged in!' });
        });
    } catch(err) {
        res.status(400).json(err);
    }
});

// logout
router.post('/logout', (req, res) => {
    // when the user logs out, destroy the session
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;