import React from 'react';
import $ from 'jquery';

var Searchbar =({searchSubmit}) => (
  <div className="search-bar">
      <input className="search-form" type="text" placeholder = "Search reviews"
      onKeyPress={ (e) => {
        if(e.key === 'Enter')
          $('.search-submit').trigger('click');
      }}/>
      <button className="search-submit"
        onClick={ () => {
          console.log('search submitted');
          searchSubmit(document.getElementsByClassName('search-form')[0].value)
        }}>
      </button>
  </div>
);

export default Searchbar;