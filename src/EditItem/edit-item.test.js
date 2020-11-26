import React from 'react';
import ReactDOM from 'react-dom';
import EditItem from './edit-item';
import Items from '../items';


// this is the test case
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EditItem items={Items} match={{params: {id: 1}}}/>, div);

  ReactDOM.unmountComponentAtNode(div);
});