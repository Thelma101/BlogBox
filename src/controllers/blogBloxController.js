const express = require('express');
const app = express();

app.use(express.json());
app.post('/', async (req,res) => {
    const { title, content, author, tag } = req.body;
    if ( !title || !content || !author || !tag ) {
        return res.status(404).json({ message: 'Please fill all the fields' })
    }

    try {
        const newBlog = new Blog({
            title,
            content,
            author,
            tag
        })
        const blog = await newBlog.save();
        res.status(201).json({ message: 'New post added successfully', blog });
    }
    catch {
        res.status(500).json({ message: error.message, error});
    }
})