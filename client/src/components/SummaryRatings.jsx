import React from 'react';

class SummaryRatings extends React.Component {

  constructor(props){
    super(props);
  }

  sumRatings(arr, prop){
    return arr.reduce((sum, obj)=> sum+=obj.ratings[prop], 0);
  }

  avgRating(arr, prop){
    return (this.sumRatings(arr, prop)/arr.length).toFixed(2);
  }

  render(){
    return (
      <div className = "reviews-summary">

        <div className = "ratings-left">

          <div className = "rating-row">
            <div className = "rating-col">
              <span className = "rating-type">Accuracy</span>
            </div>
            <div className = "rating-col">
              <div className = "rating-stars">
                <span>
                {this.avgRating(this.props.reviewsStore, 'Accuracy')}
                </span>
              </div>
            </div>
          </div>

          <div className = "rating-row">
            <div className = "rating-col">
              <span className = "rating-type"> Communication </span>
            </div>
            <div className = "rating-col">
              <div className = "rating-stars">
                <span>
                {this.avgRating(this.props.reviewsStore, 'Communication')}
                </span>
              </div>
            </div>
          </div>

          <div className = "rating-row">
            <div className = "rating-col">
              <span className = "rating-type">Cleanliness</span>
            </div>
            <div className = "rating-col">
              <div className = "rating-stars">
                <span>
                {this.avgRating(this.props.reviewsStore, 'Cleanliness')}
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
              <div className = "rating-stars">
                <span>
                {this.avgRating(this.props.reviewsStore, 'Location')}
                </span>
              </div>
            </div>
          </div>

          <div className = "rating-row">
            <div className = "rating-col">
              <span className = "rating-type">Check-in </span>
            </div>
            <div className = "rating-col">
              <div className = "rating-stars">
                <span>
                {this.avgRating(this.props.reviewsStore, 'Checkin')}
                </span>
              </div>
            </div>
          </div>

          <div className = "rating-row">
            <div className = "rating-col">
              <span className = "rating-type">Value</span>
            </div>
            <div className = "rating-col">
              <div className = "rating-stars">
                <span>
                {this.avgRating(this.props.reviewsStore, 'Value')}
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    );
  }

}

export default SummaryRatings;