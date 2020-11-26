import React from 'react';
import ReactDOM from 'react-dom';
import RecipeDetail from './recipe-detail';
import {BrowserRouter} from 'react-router-dom';

// this is the test case
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><RecipeDetail recipes={[{id: 1, ingredients: [], instructions: []}]} match={{params: {id: 1}}} /></BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});