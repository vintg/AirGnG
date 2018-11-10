const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const compression = require('compression');
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(compression());

app.set('PORT', process.env.port || 1337);
const Reviews = require('../database/Reviews');
app.use(express.static(`${__dirname}/../client/dist`));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/listing/:id', (req, res) => {
  const index = path.join(`${__dirname}/../client/dist/index.html`);
  res.sendFile(index);
});

app.get('/reviews/:id', (req, res) => {
  const id = req.params.id;
  let search = (parseInt(id))? {listingID:id}: {};
  if (req.query.reviewText !== undefined) {
    search.reviewText = {'$regex': req.query.reviewText};
  }
  console.log('query =', search);

  const query = Reviews.find(search);
  query.exec((err, reviews) => {
    if (err) res.status(404).send(err);
    res.status(200).send(reviews);
  });
});

const server = app.listen(app.get('PORT'), () => {
  console.log(`Node server running on`, server.address());
});