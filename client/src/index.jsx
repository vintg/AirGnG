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
      overallRating: 5
    }
    this.getReviews = this.getReviews.bind(this);
  }

  componentDidMount(){
    this.getReviews();
  }

  getReviews(query){
    var search = {reviewText:query};
    $.get('/api/reviews', search, reviews => {
        this.setState({reviews: reviews})
    });
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
                    style = {{width:`${this.state.overallRating}`}}>
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
        <SummaryRatings reviewsStore={this.state.reviews} />
        <ReviewsList reviewsStore={this.state.reviews} />
      </div>
      )
  }

}

ReactDOM.render(<App />, document.getElementById('reviews'));

export default App;