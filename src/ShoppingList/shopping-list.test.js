import React from 'react';
import ReactDOM from 'react-dom';
import ShoppingList from './shopping-list';
import {BrowserRouter} from 'react-router-dom';

// this is the test case
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><ShoppingList shoppingList={[]}/></BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});