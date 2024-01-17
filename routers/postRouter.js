const express = require('express');
const router = express.Router();
router.get('/add', (req,res) => {
    res.send("Add post from post");
});
//getall
//getbyid
//update
//delete
module.exports = router;