const router = require('express').Router();
const bookRoute = require('./bookSearch');

router.use('/book', bookRoute);

module.exports = router