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

// GET /search?q=something
// req.originalUrl
// => "/search?q=something"

// GET /file/javascripts/jquery.js
// req.params[0] (used with regex for window url)
// => "javascripts/jquery.js"

// example.com/users?sort=desc
// req.path
// => "/users"

app.get('listing/:id', (req, res) => {
  console.log('GET listing/' + req.params.id);
  var search = {};
  if(req.query.reviewText!== undefined){
    search = {reviewText: {'$regex': req.query.reviewText}};
  }
  if (req.params.id) search.listingID = req.params.id;

  var query = Reviews.find(search);
  query.exec((err, data)=> {
    if(err) return console.log(err);
    res.json(data);
  });
});

const server = app.listen(app.get('PORT'), () => {
  console.log(`listening on port `+server.address().port);
});
