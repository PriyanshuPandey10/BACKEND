const express = require('express');
const Model = require('../models/productModel');
const router = express.Router();
router.get('/add', (req,res) => {
    res.send("Add product ");
});
router.get('/getall', (req,res) => {
    res.send("getall product ");
});
router.get('/getbyid', (req,res) => {
    res.send("getbyid product ");
});
router.get('/update', (req,res) => {
    res.send("update product ");
});
router.get('/delete', (req,res) => {
    res.send("delete product ");
});
module.exports = router;