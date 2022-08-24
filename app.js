const express = require('express');
const mongoose = require("mongoose");
const Article = require('./models/Articles');
const methodOverride = require('method-override');
const articleController = require('./controllers/articleController');
const pageController = require('./controllers/pageController');

const app = express();


//connect DB
mongoose.connect('mongodb://127.0.0.1:27017/cleanblog-test-db');


//TEMPLATE ENGINE
app.set("view engine", "ejs");

//MIDDLEWARES
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method', {
    methods: ['POST', 'GET']
}));


app.get('/', pageController.getMainPage);
app.get('/articles/:id', pageController.getArticlePage);
app.get('/about', pageController.getAboutPage);
app.get('/add_post', pageController.getAddPostPage);
app.get('/articles/edit/:id', pageController.getEditPostPage);



app.post('/articles', articleController.AddArticle);
app.delete('/articles/:id', articleController.deleteArticle);
app.put('/articles/:id', articleController.editArticle);


const port = 3000;


app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı...`);
})





