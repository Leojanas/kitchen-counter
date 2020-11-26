import React from 'react';
import ReactDOM from 'react-dom';
import Inventory from './inventory';
import {BrowserRouter} from 'react-router-dom';

// this is the test case
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><Inventory items={[{},{}]}/></BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});