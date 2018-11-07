const db = require('./index');
const Reviews = require('./Reviews');
const faker = require('faker');

const generateRandomReview = (listingID) =>{
  let bias = 3.6; //0 to 5
  return {
    listingID: listingID,
    author: faker.name.firstName(),
    avatarUrl: faker.image.avatar(),
    reviewText: faker.lorem.sentences(5+Math.floor(Math.random()*3),Math.floor(Math.random()*7)),
    reply: (Math.random()<.1)? generateRandomReview(): {},
    ratings: {
      Accuracy: Math.round(Math.random()*(5-bias)+bias),
      Communication: Math.round(Math.random()*(5-bias)+bias),
      Cleanliness: Math.round(Math.random()*(5-bias)+bias),
      Location: Math.round(Math.random()*(5-bias)+bias),
      Checkin: Math.round(Math.random()*(5-bias)+bias),
      Value: Math.round(Math.random()*(5-bias)+bias)
    }
  };
};

const nlistings = 100;
var sampleReviewsStore = [];

for (var i=1; i<= nlistings;i++) {
  var qtyRandomReviews = 100 + Math.random(200);
  for (var j=0;j< qtyRandomReviews;j++){
    sampleReviewsStore.push(generateRandomReview(i));
  }
}

const insertSampleReviews = function() {
  Reviews.create(sampleReviewsStore)
    .then(() => db.disconnect())
    .catch(err => console.log('Unable to connect to mongodb. Error: ', err));
};

insertSampleReviews();

