const express = require('express');
const app = express();
const { Article } = require('./api');
const PORT = 3000;

// req.body - post에서 들어온 페이로드를 받을 수 있다.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Success');
});

app.post('/create', Article.createArticle);

app.listen(PORT, 'localhost', () => {
    console.log(`App listening at http://localhost:${PORT}`);
});
