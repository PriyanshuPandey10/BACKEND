const express = require('express');
const router = express.Router();
router.get('/add', (req,res) => {
    res.send("Add post from post");
});
router.get('/add', (req,res) => {
    res.send("getall from post");
});
router.get('/add', (req,res) => {
    res.send("getbyid from post");
});
router.get('/add', (req,res) => {
    res.send("update from post");
});
router.get('/add', (req,res) => {
    res.send("delete from post");
});
module.exports = router;