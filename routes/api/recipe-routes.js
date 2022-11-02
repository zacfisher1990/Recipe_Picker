const router = require('express').Router();
const { Recipe } = require('../../models');
const withAuth = require('../../utils/auth');


// get all recipes
router.get('/', (req, res) => {
    // find all recipes
    // be sure to include its associated user
    Recipe.findAll({
      include: [
        {
          model: User,
          attributes: ['id', 'email', 'password']
        }
      ]
    })
    .then(dbRecipe => res.json(dbRecipe))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
  });
  
  // get one recipe
  router.get('/:id', (req, res) => {
    // find a single recipe by its `id`
    // be sure to include its associated User
    Recipe.findOne({
      where: {
        id: req.params.id
      },
      include: [
        {
          model: User,
          attributes: ['id', 'email', 'password']
        }
      ]
    })
    .then(dbRecipe => {
      if (!dbRecipe) {
        res.status(404).json({ message: 'No recipe found with this id'})
        return;
      }
      res.json(dbRecipe)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
  });
  
  // create new recipe
  router.post('/', withAuth, (req, res) => {
  
      Recipe.create({
        recipe_name: req.body.recipe_name,
        user_id: req.body.user_id,
      })
      .then(dbRecipe => res.json(dbRecipe))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
        }); 
});
        
  // update recipe

  router.put('/:id', withAuth, (req, res) => {
    // update recipe data
    Recipe.update(req.body, {
      recipe_name: req.body.recipe_name
      },
      {
        where: {
            id: req.params.id
        }
      })
      .then(dbRecipe => {
        if (!dbRecipe) {
            res.status(404).json({ message: 'No post found with this id '});
            return;
        }
        res.json(dbRecipe); 
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Delete Recipe
  
  router.delete('/:id', withAuth, (req, res) => {
    // delete one recipe by its id
    Recipe.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbRecipe => {
        if (!dbRecipe) {
          res.status(404).json({ message: 'No recipe found with this id' });
          return;
        }
        res.json(dbRecipe);
      })
        .catch(err => {
          console.log(err)
          res.status(500).json(err);
        })
  });
  
module.exports = router;