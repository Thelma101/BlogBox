
app.post('/', async (req,res) {
    const { title, content, author, tag } = req.body;
    if ( !title || !content || !author || !tag ) {
        return res.status(404).json({ message: 'Please fill all the fields' })
    }

    try {
        // const newBlog = new Blog({
        //     title: req.body.title,
        //     content: req.body.content,
        //     author: req.body.author,
        //     tag: req.body.tag
        // });

        // newBlog.save()
        //    .then(blog => res.json(blog))
        //    .catch(err => res.status(400).json(err));

        // res.json({ message: 'New blog added successfully' });

        const newBlog = new Blog({
            title,
            content,
            author,
            tag
        })
        
    }
})