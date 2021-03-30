const express = require('express');
const data = require('./data');

// Init Express
const app = express();

// Create endpoints/route handlers
app.set('view engine', 'pug');

app.use('static', express.static('public'));

app.get('/', (req, res) => {
	res.render('index', { data: data.projects });
});

app.get('./about', (req, res) => {
	res.render('about');
});

// Listen on a port
app.listen(3000, () => {
	console.log('The application is running on locahost:3000!');
});
