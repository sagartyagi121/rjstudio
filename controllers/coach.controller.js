const coach = require('../db/db-connection');

// Simple version, without validation or sanitation
exports.test = function (req, res) {
  res.send('Greetings from the Test controller!');
};