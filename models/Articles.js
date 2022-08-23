const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const ArticleSchema = new Schema({
    title: String,
    description: String,
    dateCreated: {
        type: Date,
        default: Date.now
    }
});

const Article = mongoose.model('Article', ArticleSchema);


module.exports = Article;