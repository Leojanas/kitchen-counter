import React from 'react';
import ReactDOM from 'react-dom';
import Recipe from './recipe';
import {BrowserRouter} from 'react-router-dom';

// this is the test case
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><Recipe recipe={{}}/></BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});