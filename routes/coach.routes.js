
const express = require('express');
const router = express.Router();
const coach = require('../db/db-connection');

// Require the controllers
const coach_controller = require('../controllers/coach.controller.js');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', coach_controller.test);

// create
router.get('/', coach_controller.coach_list);

// // read
// router.get('/:id', employee_controller.employee_details);

// // update
// router.put('/:id/update', employee_controller.employee_update);

// // delete
// router.delete('/:id/delete', employee_controller.employee_delete);

module.exports = router;