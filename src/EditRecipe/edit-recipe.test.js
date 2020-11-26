import React from 'react';
import ReactDOM from 'react-dom';
import EditRecipe from './edit-recipe';

// this is the test case
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EditRecipe />, div);

  ReactDOM.unmountComponentAtNode(div);
});