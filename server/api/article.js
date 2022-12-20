const model = require('../mongoose/model');

// CREATE
const createArticle = async (req, res) => {
    const { content } = req.body;
    const newArticle = await model.Article({ content });
    const saveRequest = await newArticle.save();

    console.log(saveRequest);
    res.send(saveRequest);
};

// READ
const readArticle = async (req, res) => {
    const articles = await model.Article.find({});
    res.send(articles);
};
const findOneArticle = async (req, res) => {
    const { id } = req.params;
    const article = await model.Article.findById(id);
    res.send(article);
};

// UPDATE
const updateArticle = async (req, res) => {
    const { id, content } = req.body;
    const updatedArticle = await model.Article.findByIdAndUpdate(id, { content });
    res.send(updatedArticle);
};

// DELETE
const deleteArticle = async (req, res) => {
    const { id } = req.params;
    const deleteArticle = await model.Article.findByIdAndDelete(id);
    res.send(deleteArticle);
};

module.exports = {
    createArticle,
    readArticle,
    findOneArticle,
    updateArticle,
    deleteArticle,
};
