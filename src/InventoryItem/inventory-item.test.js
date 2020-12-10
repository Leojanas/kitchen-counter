import React from 'react';
import ReactDOM from 'react-dom';
import InventoryItem from './inventory-item';
import {BrowserRouter} from 'react-router-dom';

// this is the test case
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><table><tbody><InventoryItem item={{}}/></tbody></table></BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});