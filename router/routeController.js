const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page' });
});

app.get('/new', (req, res) => {
    res.render('new', { title: 'News Page' });
});


module.exports = app;