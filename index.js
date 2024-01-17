const express = require('express');//import express
const UserRouter = require('./routers/userRouter');
const PostRouter = require('./routers/postRouter');
const app = express();//initialize express app
const port = 5000;
//middleware
app.use('/user',UserRouter);
app.use('/post',PostRouter)
app.get('/', (req,res) => {
    res.send("Response from Express");
});
app.get('/add', (req,res) => {
    res.send("Response from add route");
});
app.get('/all', (req,res) => {
    res.send("Response from get allExpress");
});
app.get('/update', (req,res) => {
    res.send("Response from update Express");
});
app.get('*', (req,res) => {
    res.send("URL Not Found");
});
app.listen(port,()=> {console.log('server started');});