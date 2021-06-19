const express = require('express');
const bodyParser = require('body-parser');
const coach = require('./routes/coach.routes'); // Imports routes for the products
require('dotenv').config();

// initialize our express app
const app = express();
const port = Number(process.env.PORT || 3030);

app.use('/coach', coach);

// 404 error
app.all('*', (req, res, next) => {
    const err = new HttpException(404, 'Endpoint Not Found');
    next(err);
});

app.listen(port, () => {
  console.log(`Server is up and running 🚀🚀🚀 on port numner ${port}`);
});

module.exports = app;