const express = require('express');
const router = express.Router();

const {getHome} = require('../controllers/HomeController');

router.get('/', getHome);

module.exports = router;