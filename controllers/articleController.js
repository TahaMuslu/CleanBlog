const Article = require('../models/Articles');



exports.AddArticle = async (req, res) => {
    await Article.create(req.body);
    res.redirect("/");
}


exports.deleteArticle = async (req, res) => {
    const article = await Article.findByIdAndRemove(req.params.id);
    res.redirect('/');
}


exports.editArticle = async (req, res) => {
    const article = await Article.findById(req.params.id);
    article.title = req.body.title;
    article.description = req.body.description;
    article.save();
    res.redirect(`/articles/${req.params.id}`);
}