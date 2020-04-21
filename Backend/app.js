const express = require('express');
const bodyParser = require('body-parser');
// var cors = require('cors');
const Post = require('./models/posts');
const mongoose = require('mongoose');
// app.use(cors());


const app = express();
mongoose.connect("mongodb+srv://Jyotsana:OgIOUkZAoyzsZYXZ@cluster0-gmjso.mongodb.net/node-angular?retryWrites=true&w=majority")
  .then(() => {
    console.log("connected to database")
  })
  .catch(() => {
    console.log("connection failed");
  })
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With,Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,OPTIONS,DELETE");
  next();
});

app.post("/api/posts", (req, res, next) => {

  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  // const post = req.body;
  // console.log(post);
  post.save().then(createdPost => {
    console.log(result);
    res.status(201).json({
      message: "Post added succesfully",
      postId:createdPost._id
    });
  });

})

// use as a middleware to handle request
// app.use((req, res, next) => {
//   console.log("hello");
//   next();
// })
app.get('/api/posts', (req, res, next) => {

  // const posts = [
  //   { id: "ewgergeheh", title: "my first post", content: "coming from the server" },
  //   { id: "ewgergeheh", title: "my first post", content: "coming from the server" },
  //   { id: "ewgergeheh", title: "my first post", content: "coming from the server" }
  // ]
  Post.find()
    .then(documents => {
      console.log(documents);
      res.status(200).json({
        message: "Post fetch succesfully",
        posts: documents
      });
    });

  // res.send("Hello from express")

});

app.delete('/api/posts/:id', (req, res, next) => {
  console.log(req.params.id);
  Post.deleteOne({ _id: req.params.id }).then((result) => {
    console.log(result);
    res.status(201).json({ message: 'past deleted' });
  });
});


module.exports = app;
