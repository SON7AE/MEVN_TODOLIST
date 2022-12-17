const mongoose = require('mongoose');
const schema = require('./schema/index');

const db = mongoose.connection;
const model = (() => {
    db.on('error', console.error);
    db.on('open', () => {
        console.log('Connecting MongoDB!!');
    });

    // Atlas MongoDB Cluster와 연결
    mongoose.connect(
        `mongodb+srv://${process.env.DB_ID}:${process.env.DB_PASSWORD}@crud-test-ver02.ighooyk.mongodb.net/?retryWrites=true&w=majority`
    );

    // 스키마 연결
    const model = {};
    for (let key in schema) {
        model[key] = mongoose.model(key, schema[key]);
    }
    return model;
})(); // 즉시 실행함수

module.exports = model;
