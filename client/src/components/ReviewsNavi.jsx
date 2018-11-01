import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const ReviewsNavi =({pgs, changePage})=> (
  <Pagination aria-label="Page navigation example">
        <PaginationItem>
          <PaginationLink previous href="#" />
        </PaginationItem>
          {for(var i=1; i<=pgs; i++){
            <Review

            />
          }
       <PaginationItem>
      <PaginationLink next href="#" />
    </PaginationItem>
  </Pagination>
);

export default ReviewsNavi;
