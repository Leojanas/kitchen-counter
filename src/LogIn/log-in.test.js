import React from 'react';
import ReactDOM from 'react-dom';
import LogIn from './log-in';

// this is the test case
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LogIn />, div);

  ReactDOM.unmountComponentAtNode(div);
});