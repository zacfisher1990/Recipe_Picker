const router = require('express').Router();
const { User } = require('../../models');

router.post('/register', async (req, res) => {
    const { email, password, confirmPassword} = req.body
    try{
        console.log(req.body, req.session);
        if (!email || !password || !confirmPassword) {
            console.log('userRoutes.js line 9', email, password, confirmPassword);
            res.status(400).json({message: 'missing required properties in request body'}) 
        }
        if (password !== confirmPassword) {
            console.log(password, confirmPassword)
            res.status(400).json({message: 'passwords do not match'})
        }

        const newUser = User.
        // create new user, request new sessions to keep user login,

    }catch (err){
        console.log(err)
    }
})


router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({where: { email: req.body.email } });
        if (!userData) {
            res
            .status(400)
            .json({message: 'Incorrect email or password, please try again' });
            return;
        }

        if(!validPassword) {
            res
            .status(400)
            .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        req.session.save(()=>{
            req.session.user_id = userData.id;
            req.session.logged_in = true;
      
            res.json({ user: userData, message: 'You are now logged in!' });
        });
    } catch(err) {
        res.status(400).json(err);
    }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;


// start with api routee that registers a new user, this will be a post route that will check the request body to verify user models. If the user model passes authentication then...

