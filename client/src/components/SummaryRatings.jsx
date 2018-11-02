import React from 'react';

const SummaryRatings =({ratingsStore, starify})=> (
  <div className = "reviews-summary">
   <div className="ratings-container">
    <div className = "ratings-left">

      <div className = "rating-row">
        <div className = "rating-col">
          <span className = "rating-type">Accuracy</span>
        </div>
        <div className = "rating-col">
          <div className = "rating-stars" className="star-ratings-sprite">
            <span className = "star-ratings-sprite-rating"
            style = {{width: `${starify(ratingsStore.Accuracy)}`}}>
            </span>
          </div>
        </div>
      </div>

      <div className = "rating-row">
        <div className = "rating-col">
          <span className = "rating-type"> Communication </span>
        </div>
        <div className = "rating-col">
          <div className = "rating-stars" className="star-ratings-sprite">
            <span className = "star-ratings-sprite-rating"
            style = {{width: `${starify(ratingsStore.Communication)}`}}>
            </span>
          </div>
        </div>
      </div>

      <div className = "rating-row">
        <div className = "rating-col">
          <span className = "rating-type">Cleanliness</span>
        </div>
        <div className = "rating-col">
          <div className = "rating-stars" className="star-ratings-sprite">
            <span className = "star-ratings-sprite-rating"
            style = {{width: `${starify(ratingsStore.Cleanliness)}`}}>
            </span>
          </div>
        </div>
      </div>

    </div>

    <div className = "ratings-right">

      <div className = "rating-row">
        <div className = "rating-col">
          <span className = "rating-type"> Location </span>
        </div>
        <div className = "rating-col">
          <div className = "rating-stars" className="star-ratings-sprite">
            <span className = "star-ratings-sprite-rating"
            style = {{width: `${starify(ratingsStore.Location)}`}}>
            </span>
          </div>
        </div>
      </div>

      <div className = "rating-row">
        <div className = "rating-col">
          <span className = "rating-type">Check-in </span>
        </div>
        <div className = "rating-col">
          <div className = "rating-stars" className="star-ratings-sprite">
            <span className = "star-ratings-sprite-rating"
            style = {{width: `${starify(ratingsStore.Checkin)}`}}>
            </span>
          </div>
        </div>
      </div>

      <div className = "rating-row">
        <div className = "rating-col">
          <span className = "rating-type">Value</span>
        </div>
        <div className = "rating-col">
          <div className = "rating-stars" className="star-ratings-sprite">
            <span className = "star-ratings-sprite-rating"
            style = {{width: `${starify(ratingsStore.Value)}`}}>
            </span>
          </div>
        </div>
      </div>

    </div>
   </div>
  </div>

);


export default SummaryRatings;