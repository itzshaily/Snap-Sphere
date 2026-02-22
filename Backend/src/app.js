const express = require('express');
const multer = require('multer');
const uploadFile = require('./services/storage.service');
const postModel = require('./models/post.model');
const cors = require('cors');

const app = express();
app.use(cors());


// this middleware is used to parse the incoming request body as JSON
// this middleware is only used to send data from Body (raw) in postman

app.use(express.json());

// but here we are sending data from form-data in postman so we will not use above middleware

const upload = multer({ storage: multer.memoryStorage() });


app.post('/create-post', upload.single('image'), async (req, res) => {
    console.log(req.body);
    console.log(req.file);

    const result = await uploadFile(req.file.buffer);
  
    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption,

})
    res.status(201).json(post)({
        message:"post created successfully",
        post,
    })
});


app.get('/posts', async (req, res) => {

    const posts = await postModel.find();

    return res.status(200).json({
        message: "posts fetched successfully",
        posts,
    });
});


module.exports = app;