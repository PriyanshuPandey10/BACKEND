const express = require('express');
const router = express.Router();
router.get('/add', (req,res) => {
    res.send("Delete Router");
});
module.exports = router;