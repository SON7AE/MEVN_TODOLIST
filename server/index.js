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

app.get('/read', Article.readArticle);
app.post('/create', Article.createArticle); // 생성을 할 때 많이 사용
app.patch('/update', Article.updateArticle); // 수정을 할 때 많이 사용
app.delete('/delete/:id', Article.deleteArticle); // 삭제할 때 많이 사용

app.listen(PORT, 'localhost', () => {
    console.log(`App listening at http://localhost:${PORT}`);
});
