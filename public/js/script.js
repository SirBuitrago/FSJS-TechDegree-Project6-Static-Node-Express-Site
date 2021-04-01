/******************************************
Brian Buitrago
Treehouse Techdegree:
FSJS project 6 - Static Node and Express Site
******************************************/
//Thank you for taking a look at my code. I am going for the "Exceeds Expectations" grade. If my code is not on par with that grade, then please reject this project for resubmission.

// =====================================
//    GENERAL CODE & FUNCTIONS
// =====================================

'use strict';

/**
 * Handle mobile menu functionality to hide/reveal sidebar on mobile layouts
 */
const body = document.querySelector('body');
let headerBtnClicked = false;

document.querySelector('#menu-icon').addEventListener('click', (e) => {
	!headerBtnClicked
		? (body.style.transform = 'translateX(300px)')
		: (body.style.transform = 'translateX(0px)');
	return (headerBtnClicked = !headerBtnClicked);
});
