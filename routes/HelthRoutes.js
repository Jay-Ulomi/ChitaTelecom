const express = require('express');

const router = express.Router();

//Route handlers

router.get('/', (req, res) => {
    res.render('Other/Helth&Safte');
});

module.exports = router;