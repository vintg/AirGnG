import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import SummaryRatings from './components/SummaryRatings.jsx';
import ReviewsList from './components/ReviewsList.jsx';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      reviews: [],
      currentRental: null
    }
  }

  componentDidMount(){
    this.getReviews();
  }

  getReviews(){
    $.get('/api/reviews', reviews => {
        this.setState({reviews: reviews})
        console.log(this.state.reviews);
    });
  }

  render(){
    return (
      <div>
        <div className ="reviews-header">
          <div className = 'reviews-total'>
            <div className = 'reviews-total-table'>
              <div className = 'reviews-total-cell'>
                <h2>{this.state.reviews.length} Reviews</h2>
              </div>
            </div>
          </div>
         <div className = 'searchbar'>
         searchbar
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