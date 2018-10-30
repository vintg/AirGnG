import React from 'react';

class SummaryRatings extends React.Component {

  constructor(props){
    super(props);
    this.avgRatings = {};
  }

  sumRatings(arr, prop){
    return arr.reduce((sum, obj)=> sum+=obj.ratings[prop], 0);
  }

  avgRating(arr, prop){
    return (this.sumRatings(arr, prop)/arr.length).toFixed(2);
  }

  starify(val){
    return (val/5).toFixed(2)*100+'%';
  }

  calcRatings(){
    this.avgRatings['Accuracy'] = this.avgRating(this.props.reviewsStore, 'Accuracy');
    this.avgRatings['Communication'] = this.avgRating(this.props.reviewsStore, 'Communication');
    this.avgRatings['Cleanliness'] = this.avgRating(this.props.reviewsStore, 'Cleanliness');
    this.avgRatings['Location'] = this.avgRating(this.props.reviewsStore, 'Location');
    this.avgRatings['Checkin'] = this.avgRating(this.props.reviewsStore, 'Checkin');
    this.avgRatings['Value'] = this.avgRating(this.props.reviewsStore, 'Value');
  }

  render(){
    this.calcRatings();

    return (
      <div className = "reviews-summary">

        <div className = "ratings-left">

          <div className = "rating-row">
            <div className = "rating-col">
              <span className = "rating-type">Accuracy</span>
            </div>
            <div className = "rating-col">
              <div className = "rating-stars" className="star-ratings-sprite">
                <span className = "star-ratings-sprite-rating"
                style = {{width: `${this.starify(this.avgRatings.Accuracy)}`}}>
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
                style = {{width: `${this.starify(this.avgRatings.Communication)}`}}>
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
                style = {{width: `${this.starify(this.avgRatings.Cleanliness)}`}}>
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
                style = {{width: `${this.starify(this.avgRatings.Location)}`}}>
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
                style = {{width: `${this.starify(this.avgRatings.Checkin)}`}}>
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
                style = {{width: `${this.starify(this.avgRatings.Value)}`}}>
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