const express = require('express');
const router = express.Router();
const { getService, getServiceById } = require('../controllers/serviceController');

// Routes
router.get('/', getService);
router.get('/service-detail/:id', getServiceById);

module.exports = router;
