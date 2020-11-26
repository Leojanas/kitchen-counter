import React from 'react';
import ReactDOM from 'react-dom';
import Mealplan from './Mealplan';
import {BrowserRouter} from 'react-router-dom';
import Recipes from '../recipes';

// this is the test case
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><Mealplan recipes={Recipes} mealPlan={{recipes: Recipes, items: []}}/></BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});