import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import SummaryRatings from './components/SummaryRatings.jsx';
import ReviewsList from './components/ReviewsList.jsx';
import Searchbar from './components/Searchbar.jsx';
import ReviewsNavi from './components/ReviewsNavi.jsx';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      reviews: [],
      page: [],
      pageCt: [1],
      currentPage: 1,
      currentRental: null,
      avgRatings: {},
      totalRatings: null
    }
    this.getReviews = this.getReviews.bind(this);
    this.starify = this.starify.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  componentDidMount(){
    this.getReviews();
  }

  changePage(pg=1){
    var pageView = this.state.reviews.slice(Math.max(0, (pg-1)*7), pg*7);
    this.setState({page:pageView});
    this.setState({currentPage:pg});
    this.setPageCt(pg);
  }

  setPageCt(pg=1){
    pg = Number(pg);
    var pageCt = [];
    var totalpgs = Math.ceil(this.state.reviews.length/7);

    if(pg<3){
      for (var i=1;i<Math.min(4,totalpgs);i++){
        pageCt.push(i);
      }
    } else if (pg===3) {
      console.log('pg = 3?', pg);
      for (var i=1;i<Math.min(5,totalpgs);i++){
        console.log(i);
        pageCt.push(i);
      }
    } else if (pg===4) {
      for (var i=1;i<Math.min(6,totalpgs);i++){
        pageCt.push(i);
      }
    } else if (pg>=5){
      pageCt.push(1);
      pageCt.push('...');
      for(var i=pg-1; i<Math.min(pg+2, totalpgs); i++){
        pageCt.push(i);
      }
    }

    if(pg<totalpgs-2){
      pageCt.push('...');
      pageCt.push(totalpgs);
    } else if(pg>=totalpgs-3) {
      pageCt = pageCt.slice(0,2);
      if(pg===totalpgs-2) pageCt.push(pg-1);
      for(var i=Math.max(2,totalpgs-2);i<=totalpgs;i++){
        pageCt.push(i);
      }
    }

    this.setState({pageCt:pageCt});
    console.log('nav numbers', pageCt);
  }

  getReviews(query){
    var search = {reviewText:query};
    $.get('/api/reviews', search, reviews => {
        this.setState({reviews: reviews});
        this.changePage();
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
    return Math.ceil(((val/n).toFixed(1)*100)/10)*10+'%'; //half star rounding
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
        <ReviewsList reviewsStore={this.state.page}/>
        <ReviewsNavi pgs={this.state.pageCt} activePg={this.state.currentPage} changePage={this.changePage}/>
      </div>
      )
  }

}

ReactDOM.render(<App />, document.getElementById('reviews'));

export default App;