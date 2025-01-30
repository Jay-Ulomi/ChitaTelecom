const express = require('express');

const router = express.Router();

//Route handlers

router.get('/', (req, res) => {
    res.render('Other/Privacy_Policy');
});

module.exports = router;