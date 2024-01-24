const express = require('express');
const Model = require('../models/postModel');
const router = express.Router();
router.post('/add', (req,res) => {
    console.log(req.body);
    new Model(req.body).save()
    .then((result) => {
        console.log(result);
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.join(err);
        
    });
});
router.get('/getall', (req,res) => {
    Model.find()
    .then((result) => {
       res.json(result) 
    }).catch((err) => {
        console.log(err);
        res.json(err);
    });
    
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