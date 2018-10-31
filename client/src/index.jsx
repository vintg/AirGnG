import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import SummaryRatings from './components/SummaryRatings.jsx';
import ReviewsList from './components/ReviewsList.jsx';
import Searchbar from './components/Searchbar.jsx';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      reviews: [],
      currentRental: null,
      avgRatings: {},
      totalRatings: null
    }
    this.getReviews = this.getReviews.bind(this);
    this.starify = this.starify.bind(this);
  }

  componentDidMount(){
    this.getReviews();
  }

  getReviews(query){
    var search = {reviewText:query};
    $.get('/api/reviews', search, reviews => {
        this.setState({reviews: reviews})
        this.calcRatings();
    });
  }

  sumRatings(arr, prop){
    return arr.reduce((sum, obj)=> sum+=obj.ratings[prop], 0);
  }

  avgRating(arr, prop){
    return (this.sumRatings(arr, prop)/arr.length).toFixed(2);
  }

  starify(val, n=5){
    return Math.round(val/n * 2/2).toFixed(2)*100+'%';
  }

  calcRatings(){
    this.state.avgRatings['Accuracy'] = this.avgRating(this.state.reviews, 'Accuracy');
    this.state.avgRatings['Communication'] = this.avgRating(this.state.reviews, 'Communication');
    this.state.avgRatings['Cleanliness'] = this.avgRating(this.state.reviews, 'Cleanliness');
    this.state.avgRatings['Location'] = this.avgRating(this.state.reviews, 'Location');
    this.state.avgRatings['Checkin'] = this.avgRating(this.state.reviews, 'Checkin');
    this.state.avgRatings['Value'] = this.avgRating(this.state.reviews, 'Value');

    var sumAvgRatings = 0;
    for(var k in this.state.avgRatings){
      sumAvgRatings += Number(this.state.avgRatings[k]);
    }
    this.setState({totalRatings: sumAvgRatings.toFixed(2)});
  }

  render(){
    return (
      <div className = 'reviews-container'>
        <div className ='reviews-header'>
          <div className = 'reviews-total'>
            <div className = 'reviews-total-table'>
              <div className = 'reviews-total-cell'>
                <h2>{this.state.reviews.length} Reviews</h2>
                  <div className = "rating-stars" className="star-ratings-sprite-large">
                    <span className = "star-ratings-sprite-rating-large"
                    style = {{width:`${this.starify(this.state.totalRatings, 30)}`}}>
                    </span>
                  </div>
              </div>
            </div>
          </div>
         <div className = 'searchbar'>
           <Searchbar searchSubmit={this.getReviews}/>
         </div>
        <div className="review-entry-border"></div>
        </div>
        <SummaryRatings ratingsStore={this.state.avgRatings} starify={this.starify}/>
        <ReviewsList reviewsStore={this.state.reviews} />
      </div>
      )
  }

}

ReactDOM.render(<App />, document.getElementById('reviews'));

export default App;