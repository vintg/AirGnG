const db = require('./index.js');
const Reviews = require('./Reviews.js');
const faker = require('faker');

const generateRandomReview = () =>{
  let bias = 3.6; //0 to 3
  return {
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

const qtyRandomReviews = 21;
const sampleReviewsStore = [];

for (var i =0;i< qtyRandomReviews;i++){
  sampleReviewsStore.push(generateRandomReview());
}

const insertSampleReviews = function() {
  Reviews.create(sampleReviewsStore)
    .then(() => db.disconnect());
};

insertSampleReviews();