import React from 'react';
import $ from 'jquery';

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const Review =({reviewEntry})=> (
  <div className = 'review-entry'>
    <div className = 'review-author'>
      <img className = 'review-author-avatar' src={reviewEntry.avatarUrl} />
      <div/>
      <div className = 'review-author-name'>
        {reviewEntry.author}
        <div className = 'review-author-date'>
          {monthNames[new Date(reviewEntry.createdAt).getMonth()]+' '+new Date(reviewEntry.createdAt).getFullYear()}
        </div>
      </div>
      <div className = 'review-flag'>
        <button type="button" className='review-flag-button'
        onClick={ (e)=> {
          console.log(e.target,'was flagged');
        }}></button>
      </div>
    </div>

    <div className = 'review-entry-text'>
        {(reviewEntry.reviewText.length>240)? reviewEntry.reviewText.slice(0,240)+'...' :reviewEntry.reviewText }

       {
        (reviewEntry.reviewText.length>240)?
         (<button type="button" className="review-readmore"
          onClick={ (e)=> {
            var selected = $(e.target).parent();
            var expanded = reviewEntry.reviewText;
            selected.html(expanded);

            if(reviewEntry.reply !== null){
              console.log(reviewEntry.reply);
              selected.append(`<Review reviewEntry={reviewEntry.reply} />`);
            }
          }}> Read more </button>
         ):""
       }
    </div>

    <div className="review-entry-border"></div>

  </div>
);

export default Review;