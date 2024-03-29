const express = require('express');
const Model =require('../models/userModel');
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
router.get('/getbyid', (req,res) => {
    res.send("getbyid Response from user");
});
router.get('/update', (req,res) => {
    res.send("update Response from user");
});
router.delete("/delete:id", (req,res) => {
   Model.findByIdAndDelete(req.params.id)
   .then((result) => {
    res.json(result);
    
   }).catch((err) => {
    console.log(err);
    res.json(err);
    
   });
});
module.exports = router;