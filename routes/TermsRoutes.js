const express = require('express');

const router = express.Router();

//Route handlers

router.get('/', (req, res) => {
    res.render('Other/Terms&Conditions',);
});

module.exports = router;