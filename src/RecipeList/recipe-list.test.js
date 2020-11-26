import React from 'react';
import ReactDOM from 'react-dom';
import RecipeList from './recipe-list';
import {BrowserRouter} from 'react-router-dom';

// this is the test case
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><RecipeList recipes={[{}]}/></BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});