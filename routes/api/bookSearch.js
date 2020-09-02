const router = require('express').Router();
const bookContrl = require('../../controllers/bookController');

// Matches with "/api/book"
router.route('/')
    .get(bookContrl.getAll)
    .post(bookContrl.create);

// Matches with "/api/book/:id"
router
    .route('/:id')
    .get(bookContrl.getById)
    .put(bookContrl.update)
    .delete(bookContrl.remove);

module.exports = router;
