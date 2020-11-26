import React from 'react';
import ReactDOM from 'react-dom';
import FormIngredient from './form-ingredient';

// this is the test case
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FormIngredient number={1} item={{name: '',qty: '', unit: ''}}/>, div);

  ReactDOM.unmountComponentAtNode(div);
});