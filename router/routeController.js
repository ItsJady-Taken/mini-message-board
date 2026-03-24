const express = require('express');
const app = express();
const messages = require('../data/message');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
app.use(express.urlencoded({ extended: true }));
app.use('/styles', express.static(path.join(__dirname, '../styles')));

app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page', messages: messages });
});

app.get('/new', (req, res) => {
    res.render('form', { title: 'New Message' });
});

app.post('/new', (req, res) => {
    const { authorName, message } = req.body;
    messages.push({ text: message, user: authorName, date: new Date() });
    res.redirect('/');
});

app.get('/message/:id', (req, res) => {
    const messageId = parseInt(req.params.id);
    const message = messages[messageId];
    if (message) {
        res.render('message', { title: 'Message Details', message: message });
    } else {
        res.status(404).send('Message not found');
    }
});


module.exports = app;