const express = require('express');
const app = express();
const messages = require('../data/message');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page', messages: messages });
});

app.get('/new', (req, res) => {
    res.render('new', { title: 'News Page' });
});


module.exports = app;