/******************************************
Brian Buitrago
Treehouse Techdegree:
FSJS project 6 - Static Node and Express Site
******************************************/
//Thank you for taking a look at my code. I am going for the "Exceeds Expectations" grade. If my code is not on par with that grade, then please reject this project for resubmission.

// =====================================
//    ROUTES AND ENDPOINTS
// =====================================

const express = require('express');
//const data = require('./data');

// Init Express
const app = express();

// Variable for Port
const PORT = process.env.PORT || 3000;

// Create endpoints/route handlers
app.set('view engine', 'pug');

app.use('static', express.static('public'));

app.get('/', (req, res) => {
	res.render('index', { data: data.projects });
});

app.get('./about', (req, res) => {
	res.render('about');
});

// Listen on port 3000 of local machine
app.listen(PORT, () => {
	console.log('The application is running on locahost:3000!');
});
