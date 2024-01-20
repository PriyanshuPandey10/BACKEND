const mongoose = require('mongoose');
const url = "mongodb+srv://PriyanshuPandey:rahulrupesh@cluster0.7sk9dqn.mongodb.net/mydb?retryWrites=true&w=majority";
mongoose.connect(url)
.then((result) => {
    console.log('database connected');
})
.catch((err) => {                                                         //asyncronous function
    console.log(err);
});
module.exports = mongoose;