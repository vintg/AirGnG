import React from 'react';
import { shallow, mount, render } from 'enzyme';

import App from '../index';

describe('Reviews <App />', () => {

  it('should render Searchbar, SummaryRatings, ReviewsList, and ReviewsNavi components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Searchbar)).to.have.length(1);
    expect(wrapper.find(SummaryRatings)).to.have.length(1);
    expect(wrapper.find(ReviewsList)).to.have.length(1);
    expect(wrapper.find(ReviewsNavi)).to.have.length(1);
  });

  // it('should render an `.icon-star`', () => {
  //   const wrapper = shallow(<App />);
  //   expect(wrapper.find('.icon-star')).to.have.length(1);
  // });

  // it('should render children when passed in', () => {
  //   const wrapper = shallow(
  //     <MyComponent>
  //       <div className="unique" />
  //     </MyComponent>
  //   );
  //   expect(wrapper.contains(<div className="unique" />)).to.be.true;
  // });

  // it('simulates click events', () => {
  //   const onButtonClick = sinon.spy();
  //   const wrapper = shallow(
  //     <Foo onButtonClick={onButtonClick} />
  //   );
  //   wrapper.find('button').simulate('click');
  //   expect(onButtonClick.calledOnce).to.be.true;
  // });

});