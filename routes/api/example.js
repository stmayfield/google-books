const router = require('express').Router();
const exampleController = require('../../controllers/exampleController');

// Matches with "/api/index"
router.route('/')
    .get(exampleController.getAll)
    .post(exampleController.create);

// Matches with "/api/index/:id"
router
    .route('/:id')
    .get(exampleController.getById)
    .put(exampleController.update)
    .delete(exampleController.remove);

module.exports = router;
