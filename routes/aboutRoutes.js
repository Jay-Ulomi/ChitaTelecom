const express = require('express');

const router = express.Router();

//Route handlers

router.get('/', (req, res) => {
    res.render('About/about');
});

module.exports = router;