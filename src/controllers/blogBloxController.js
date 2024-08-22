
app.post('/', async (req,res) {
    const { title, content, author, tag } = req.body;

    
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

        })
    }
})