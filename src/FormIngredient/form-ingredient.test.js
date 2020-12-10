import React from 'react';
import ReactDOM from 'react-dom';
import FormIngredient from './form-ingredient';

// this is the test case
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<table><tbody><FormIngredient number={1} item={{name: '',qty: 0, unit: 'pounds'}} handleUpdateIngredient={() => {}}/></tbody></table>, div);

  ReactDOM.unmountComponentAtNode(div);
});