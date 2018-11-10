const mongoose = require('mongoose');
const mongoUri = 'mongodb://admin:heathcliff0@ds155903.mlab.com:55903/airbnb-reviews';
//'mongodb://localhost/Reviews';
const db = mongoose.connect(mongoUri, { useNewUrlParser: true });

module.exports = db;
