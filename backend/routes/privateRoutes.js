const express = require('express');
const router = express.Router();
const privateRoutesController = require('../controllers/privateRoutesController');

router.get('/find/:id', privateRoutesController.getUser);


module.exports = router;