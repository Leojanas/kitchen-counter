import React from 'react';
import ReactDOM from 'react-dom';
import AddRecipe from './add-recipe';

// this is the test case
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddRecipe />, div);

  ReactDOM.unmountComponentAtNode(div);
});