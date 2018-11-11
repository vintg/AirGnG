const mongoose = require('mongoose');
//'mongodb://localhost/Reviews';
const db = mongoose.connect('mongodb://admin:heathcliff0@ds155903.mlab.com:55903/airbnb-reviews', { useNewUrlParser: true });

module.exports = db;
