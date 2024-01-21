const {Schema,model} = require('../connection');
const mySchema = new Schema({
    likes :Number,
    comment :Number,
    share :Number,
    image :String,
    sender :String,
})
module.exports = model('posts',mySchema);
