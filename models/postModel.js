const {Schema,model} = require('../connection');
const mySchema = new Schema({
    likes :Number,
    comment :Number,
    share :Number,
})
module.exports = model('posts',mySchema);
