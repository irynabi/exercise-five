const express = require('express')
const app = express()
const firebase = require("firebase/app");
const port = 3000

const firebaseConfig = {
    apiKey: "AIzaSyC9T6uCWcxYwB2juyWXkk73YDeJSMTpZQo",
    authDomain: "exercise-five-e60da.firebaseapp.com",
    projectId: "exercise-five-e60da",
    storageBucket: "exercise-five-e60da.appspot.com",
    messagingSenderId: "364361531975",
    appId: "1:364361531975:web:0c6ca208d4165fa9a92762"
  };

firebase.initializeApp(firebaseConfig);

const indexRoute = require('./routes/index');
const singlePostRoute = require('./routes/singlePost');
//const createPostRoute = require('./routes/createPost');

app.use("/", indexRoute);
app.use("/post", singlePostRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})