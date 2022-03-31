const express = require('express');
const todosController = require('./todosController');
const router = express.Router();
const passport = require('../authentication/passport');

/* GET users listing. */
router.get('/', passport.authenticate('jwt', { session: false }), todosController.list);
// router.put('/:id', todosController.update);
router.delete('/:id', todosController.delete);
// router.post('/', todosController.create);

module.exports = router;
