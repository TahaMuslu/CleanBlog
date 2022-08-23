const express = require('express');
const mongoose = require("mongoose");
const Article = require('./models/Articles');

const app = express();


//connect DB
mongoose.connect('mongodb://127.0.0.1:27017/cleanblog-test-db');


//TEMPLATE ENGINE
app.set("view engine", "ejs");

//MIDDLEWARES
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', async (req, res) => {
    const articles = await Article.find();
    res.render("index", {
        articles
    })
});

app.get('/about', (req, res) => {
    res.render("about")
});

app.get('/add_post', (req, res) => {
    res.render("add_post")
});

app.get('/post', (req, res) => {
    res.render("post")
});

app.post('/articles', async (req, res) => {
    await Article.create(req.body)
    res.redirect("/");
})



const port = 3000;


app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı...`);
})





