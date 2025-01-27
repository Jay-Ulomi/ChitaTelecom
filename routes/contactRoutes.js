const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Routes
router.get('/contact', contactController.getContact);
router.post('/', contactController.submitContactForm);


module.exports = router;
