import React from 'react';
import ReactDOM from 'react-dom';
import EditRecipe from './edit-recipe';

// this is the test case
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EditRecipe history={{}} match={{params: {id: '1'}}} recipes={[]}/>, div);

  ReactDOM.unmountComponentAtNode(div);
});