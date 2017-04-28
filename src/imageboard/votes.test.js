import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';

import Votes from './votes.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Votes />, div);
});

it('registers upvotes', () => {
  const votes = ReactTestUtils.renderIntoDocument(<Votes />);
  const upButton = votes.refs.up;
  
  ReactTestUtils.Simulate.click(upButton);
  expect(votes.state.votes).toEqual(1);
});

it('registers downvotes', () => {
  const votes = ReactTestUtils.renderIntoDocument(<Votes />);
  const downButton = votes.refs.down;
  
  ReactTestUtils.Simulate.click(downButton);
  expect(votes.state.votes).toEqual(-1);
});