const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('Fqn/fqn');
});

module.exports = router;