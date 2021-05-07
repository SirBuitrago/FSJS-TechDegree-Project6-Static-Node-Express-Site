/******************************************
Brian Buitrago
Treehouse Techdegree:
FSJS project 6 - Static Node and Express Site
******************************************/
//Thank you for taking a look at my code. I am going for the "Exceeds Expectations" grade. If my code is not on par with that grade, then please reject this project for resubmission.

// =====================================
//    MODULES, ROUTES AND ENDPOINTS
// =====================================

// Required Modules
const express = require('express');
const data = require('./data');
const router = express.Router();
// const { projects } = require('../data/data.json');

// Init Express
const app = express();

// Variable for Port
const PORT = process.env.PORT || 3000;

// App config
app.set('view engine', 'pug');

app.use('static', express.static('public'));

// Defining Routes
app.get('/', (req, res) => {
	res.render('index', { data: data.projects });
});

app.get('./about', (req, res) => {
	res.render('about');
});

// Error Page Handlers
app.get('/project/:id', (req, res, next) => {
	if (parseInt(req.params.id) > data.projects.length - 1) {
		const err = new Error('Invalid URL...');
		err.status = 404;
		return next(err);
	}
	res.render('project', { id: parseInt(req.params.id), data: data.projects });
});

app.use((req, res, next) => {
	const err = new Error('Oh no! An error occured...');
	err.status = 404;
	next(err);
});

app.use((err, req, res, next) => {
	res.locals.error = err;
	res.statsu(err.status);
	console.log(err);
	res.render('error');
});

// Active Server: Listen on port 3000 of local machine
app.listen(PORT, () => {
	console.log('The application is running on locahost:3000!');
});
