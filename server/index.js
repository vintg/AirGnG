const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const compression = require('compression');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(compression());
const Reviews = require('../database/Reviews');
app.set('PORT', 1337);
app.use(express.static(__dirname + '/../client/dist'));

app.get('/api/reviews', (req, res) => {
  console.log('GET /api/reviews');
  var search = {};
  if(req.query.reviewText!== undefined){
    search = {reviewText: {'$regex': req.query.reviewText}};
  }
  console.log('executing', search);
  var query = Reviews.find(search);
  query.exec((err, data)=> {
    if(err) return console.log(err);
    res.json(data);
  });
});

app.post('/api/reviews', (req, res) => {
  console.log('POST /api/reviews');
//TO-DO
});

const server = app.listen(app.get('PORT'), () => {
  console.log(`listening on port `+server.address().port);
});
