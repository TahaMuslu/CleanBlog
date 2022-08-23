const express = require('express');

const app = express();

const port = 3000;


app.get('/', (req, res) => {

    const blog = {
        id: 1,
        name: "CleanBlog",
        description: "clean blog desc"
    }
    res.send(blog);
})



app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı...`);
})





