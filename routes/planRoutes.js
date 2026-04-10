const express = require('express');
const router = express.Router();


// Routes
router.get('/', (req, res) => {
    res.render('Plan/plan', { showPlanPurchaseButtons: true });
});


module.exports = router;
