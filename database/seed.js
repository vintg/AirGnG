const db = require('./index.js');
const Reviews = require('./Reviews.js');
const faker = require('faker');

var generateRandomReview = () =>{
  return {
    author: faker.name.firstName(),
    avatarUrl: faker.image.avatar(),
    reviewText: faker.lorem.sentences(5+Math.floor(Math.random()*3),Math.floor(Math.random()*7)),
    reply: (Math.random()<.1)? generateRandomReview(): {},
    ratings: {
      Accuracy: Math.round(Math.random()*2+.3)+3,
      Communication: Math.round(Math.random()*2+.3)+3,
      Cleanliness: Math.round(Math.random()*2+.3)+3,
      Location: Math.round(Math.random()*2+.3)+3,
      Checkin: Math.round(Math.random()*2+.3)+3,
      Value: Math.round(Math.random()*2+.3)+3
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