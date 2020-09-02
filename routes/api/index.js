const router = require('express').Router();
const indexRoute = require('./example');

router.use('/index', indexRoute);



module.exports = router