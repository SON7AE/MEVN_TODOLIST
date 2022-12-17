const mongoose = require('mongoose');

const Article = new mongoose.Schema({
    // 게시글 본문
    content: {
        type: String,
        default: '',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true,
    },
});

module.exports = Article;
