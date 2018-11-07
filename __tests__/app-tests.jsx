import React from 'react';
import { shallow, mount, render } from 'enzyme';

import App from '../client/src/App';
import SummaryRatings from '../client/src/components/SummaryRatings';
import ReviewsList from '../client/src/components/ReviewsList';
import Searchbar from '../client/src/components/Searchbar';
import ReviewsNavi from '../client/src/components/ReviewsNavi';

const wrapper = shallow(<App />);

describe('Reviews', () => {

  it('should render without throwing an error', () => {
    expect(shallow(<App />).exists()).toBe(true);
  });

  it('should be selectable by class "reviews-container"', () => {
    expect(shallow(<App />).is('.reviews-container')).toBe(true);
  });

  it('should mount in a full DOM', () => {
    expect(mount(<App />).find('.reviews-container').length).toBe(1);
  });

});