import React from 'react';
import ReactDOM from 'react-dom';
import AddItem from './add-item';

// this is the test case
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddItem />, div);

  ReactDOM.unmountComponentAtNode(div);
});