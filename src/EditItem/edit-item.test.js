import React from 'react';
import ReactDOM from 'react-dom';
import EditItem from './edit-item';


// this is the test case
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EditItem />, div);

  ReactDOM.unmountComponentAtNode(div);
});