const db  = require('./index.js');
const Review = require('./Review.js');

var generateRandomReview = () =>{
  return {
    author: faker.name.firstName(),
    avatarUrl: faker.image.avatar(),
    reviewText: faker.lorem.sentences(1+Math.floor(Math.random()*3),Math.floor(Math.random()*3)+7),
    reply: (Math.random()<.1)? randReview(): {},
    ratings: {
      Accuracy: Math.floor(Math.random()*2)+3,
      Communication: Math.floor(Math.random()*2)+3,
      Cleanliness: Math.floor(Math.random()*2)+3,
      Location: Math.floor(Math.random()*2)+3,
      Check-in: Math.floor(Math.random()*2)+3,
      Value: Math.floor(Math.random()*2)+3
  };
};

const qtyRandomReviews = 21;
const sampleReviewsStore = [];

for (var i =0;i< qtyRandomReviews;i++){
  sampleReviewsStore.push(generateRandomReview());
}

const insertSampleReviews = function() {
  Review.create(sampleReviewsStore)
    .then(() => db.disconnect());
};

insertSampleReviews();