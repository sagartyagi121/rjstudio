const coach = require('../db/db-connection');
const CoachModel = require('../models/coach.model');

// Simple version, without validation or sanitation
exports.test = function (req, res) {
  res.send('Greetings from the Test controller!');
};

// Get list of coaches by name
exports.coach_list = function (req, res) {
  console.log('in coach list');
  
  getAllCoaches = async (req, res, next) => {
    console.log('in coach list all users');
    let coachList = await CoachModel.find();
    if (!coachList.length) {
        throw new HttpException(404, 'Users not found');
    }

    res.send(coachList);
  };
  getAllCoaches(req, res);
};