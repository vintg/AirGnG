import React from 'react';
import { mount } from 'enzyme';

import App from '../index';
import SummaryRatings from '../components/SummaryRatings.jsx';
import ReviewsList from '../components/ReviewsList.jsx';
import Searchbar from '../components/Searchbar.jsx';
import ReviewsNavi from '../components/ReviewsNavi.jsx';

const wrapper = mount(<App />);

describe('Reviews', () => {

  it('should render <App /> to the page', () => {
    expect(wrapper.html().toLowerCase()).to.include('reviews-container');
  });

  it('should render four inner components', () => {
    expect(wrapper.find(Searchbar)).to.have.length(1);
    expect(wrapper.find(SummaryRatings)).to.have.length(1);
    expect(wrapper.find(ReviewsList)).to.have.length(1);
    expect(wrapper.find(ReviewsNavi)).to.have.length(1);
  });

  // it('should render an `.icon-star`', () => {
  //   const wrapper = mount(<App />);
  //   expect(wrapper.find('.icon-star')).to.have.length(1);
  // });

  // it('should render children when passed in', () => {
  //   const wrapper = mount(
  //     <MyComponent>
  //       <div className="unique" />
  //     </MyComponent>
  //   );
  //   expect(wrapper.contains(<div className="unique" />)).to.be.true;
  // });

  // it('simulates click events', () => {
  //   const onButtonClick = sinon.spy();
  //   const wrapper = mount(
  //     <Foo onButtonClick={onButtonClick} />
  //   );
  //   wrapper.find('button').simulate('click');
  //   expect(onButtonClick.calledOnce).to.be.true;
  // });

});