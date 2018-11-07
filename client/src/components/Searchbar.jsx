import React from 'react';
import $ from 'jquery';

const Searchbar =({searchSubmit}) => (
  <div className="search-bar">
      <input className="search-form" type="text" placeholder = "Search reviews"
      onKeyPress={ (e) => {
        if(e.key === 'Enter')
          $('.search-submit').trigger('click');
      }}/>
      <button className="search-submit"
        onClick={ () => {
          const query = document.getElementsByClassName('search-form')[0].value;
          console.log('search submitted', query);
          searchSubmit(query);
        }}>
      </button>
  </div>
);

export default Searchbar;
