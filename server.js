const express = require('express');
const mongoose = require('mongoose');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
const app = express();
app.use(express.json());
const blogBoxRoute = require('./src/routes/blogRoute.js');


const port = process.env.port || 4000;

app.use('/', blogBoxRoute);

// Connect to MongoDB
mongoose.connect('mongodb://localhost/BlogBox', { useNewUrlParser: true, useUnifiedTopology: true })
 .then(() => console.log('MongoDB Connected...Hurray!'))
 .catch(err => console.log(err));


app.listen(port, () => {
    console.log(`Yaay! Server running on port ${port}`);
  });