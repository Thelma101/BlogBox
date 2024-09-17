const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
const blogRoute = require('./src/routes/blogRoute.js');
const userRoute = require('./src/routes/userRoute.js');
const commentRoute = require('./src/routes/commentRoute.js');


const port = process.env.port || 4000;

app.use('/', blogRoute);
app.use('/', userRoute);
app.use('/', commentRoute);

// Connect to MongoDB
mongoose.connect('mongodb://localhost/BlogBox')
 .then(() => console.log('MongoDB Connected...Hurray!'))
 .catch(err => console.log(err));


app.listen(port, () => {
    console.log(`Yaay! Server running on port ${port}`);
  });
  