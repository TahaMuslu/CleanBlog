const Article = require('../models/Articles');







exports.getMainPage = async (req, res) => {
    const articles = await Article.find();
    res.render("index", {
        articles
    })
}


exports.getArticlePage = async (req, res) => {
    const article = await Article.findById(req.params.id);
    res.render('post', {
        article
    });
}


exports.getAboutPage = (req, res) => {
    res.render("about");
}


exports.getAddPostPage = (req, res) => {
    res.render("add_post");
}


exports.getEditPostPage = async (req, res) => {
    const article = await Article.findById(req.params.id);

    res.render('edit', {
        article
    });

}