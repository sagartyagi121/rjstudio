
const express = require('express');
const router = express.Router();
const coach = require('../db/db-connection');

// Require the controllers
const coach_controller = require('../controllers/coach.controller.js');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', coach_controller.test);

// all coaches
router.get('/', coach_controller.coach_list);

// slots available
router.get('/avaslots/:name', coach_controller.coach_available_slots);

// book a slot
router.post('/book', coach_controller.coach_bookslot);

module.exports = router;