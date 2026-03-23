const express = require('express');
const app = express();
const messages = require('../data/message');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page', messages: messages });
});

app.get('/new', (req, res) => {
    res.render('form', { title: 'New Message' });
});

app.post('/new', (req, res) => {
    const { authorName, message } = req.body;
    messages.push({ text: message, user: authorName, added: new Date() });
    res.redirect('/');
});


module.exports = app;