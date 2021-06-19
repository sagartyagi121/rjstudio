const coach = require('../db/db-connection');
const CoachModel = require('../models/coach.model');

// Simple version, without validation or sanitation
exports.test = function (req, res) {

  res.send('Greetings from the Test controller!');
};

// Get list of coaches by name
exports.coach_list = async (req, res, next) => {

  let coachList = await CoachModel.find();
  if (!coachList.length) {
      throw new HttpException(404, 'Users not found');
  }
  res.send(coachList);
};

exports.coach_available_slots = async (req, res, next) => {

  let timeSlots = await CoachModel.timeslots(req.params.name);
  res.send(timeSlots);
}

exports.coach_bookslot = async (req, res, next) => {
  let spotBooked = CoachModel.bookASlot(req.body.name, req.body.from, req.body.to);
  if (spotBooked) res.send('{"message": "spot booked"}')
  else res.send('{"message":"error in booking"}')

}