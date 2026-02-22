const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({

    image:String,
    caption:String,

})
                          // collection name, schema name
const postModel = mongoose.model('post', postSchema)

module.exports = postModel;


