import React from 'react';
import $ from 'jquery';
import NaviItem from './NaviItem.jsx';

const ReviewsNavi =({pgs, activePg, changePage})=> (
  <div className = "reviews-navi">
    <ul className= "navi-ul">
      <li className="navi-prev">
        <button type="button" className="navi-page-link" onClick={(e)=> changePage(activePg-1)} >
          <div className="navi-next-container" >
            <div className="navi-next-arrow">
              <svg className ="navi-arrow" viewBox="0 0 18 18" role="img" aria-label="Previous" focusable="false"><path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fillRule="evenodd"></path></svg>
              </div>
          </div>
        </button>
      </li>

      {pgs.map((pg,i) => <NaviItem key={pg+i} pgNo={pg} changePage={changePage} activePg={activePg} /> )}

      <li className="navi-next">
        <button type="button" className="navi-page-link" onClick={(e)=>changePage(activePg+1)}>
          <div className="navi-next-container">
            <div className="navi-next-arrow">
              <svg className ="navi-arrow" viewBox="0 0 18 18" role="img" aria-label="Next" focusable="false"><path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fillRule="evenodd"></path></svg>
              </div>
          </div>
        </button>
      </li>
    </ul>
  </div>
);

export default ReviewsNavi;
