import React from 'react';
import $ from 'jquery';

const NaviItem=({pgNo, changePage, activePg})=>(
  <li className = "navi-page-item">
    <button type="button"
      className = {(pgNo===activePg)? "navi-page-link navi-page-link-active":"navi-page-link"}
      onClick={ (e)=> {
        const targetPage = parseInt($(e.target).html());
        const selected = $(e.target).parent();

        if(!isNaN(targetPage)) {
          $('.navi-page-link').removeClass('navi-page-link-active');
          selected.addClass('navi-page-link-active');

          $('.navi-page-no').removeClass('navi-page-no-active');
          $(e.target).addClass('navi-page-no-active');

          changePage(targetPage);
        }
      }}>
      <div className = {(pgNo===activePg)? "navi-page-no navi-page-no-active":"navi-page-no"}>
        {pgNo}
      </div>
    </button>
  </li>
);

export default NaviItem;