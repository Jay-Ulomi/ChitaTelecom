const express = require('express');

const router = express.Router();

//Route handlers

router.get('/', (req, res) => {
    res.render('Other/CodeConduct');
});

module.exports = router;