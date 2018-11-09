const mongoose = require('mongoose');
require('dotenv').config();
//const mongoUri = 'mongodb://localhost/Reviews';

const db = mongoose.connect(process.env.MONGOURI, { useNewUrlParser: true });

module.exports = db;
