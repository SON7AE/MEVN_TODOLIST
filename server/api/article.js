const model = require('../mongoose/model');

// CREATE
const createArticle = async (req, res) => {
    const { content } = req.body;
    const newArticle = await model.Article({ content });
    const saveRequest = await newArticle.save();

    console.log(saveRequest);
    res.send(true);
};

// READ
const readArticle = (req, res) => {};

// UPDATE
const updateArticle = (req, res) => {};

// DELETE
const deleteArticle = (req, res) => {};

module.exports = {
    createArticle,
    readArticle,
    updateArticle,
    deleteArticle,
};
