import React from 'react';
import {Route} from 'react-router-dom';
import Home from './Home/home';
import Inventory from './Inventory/inventory';
import RecipeList from './RecipeList/recipe-list';
import SignUp from './SignUp/sign-up';
import LogIn from './LogIn/log-in';

function App() {
  return (
    <main className='App'>
      <Route
        exact path='/'
        component={Home}
      />
      <Route 
        path='/inventory'
        component={Inventory}
      />
      <Route
        exact path='/recipes'
        component={RecipeList}
      />
      <Route
        path='/sign-up'
        component={SignUp}
      />
      <Route 
        path='/log-in'
        component={LogIn}
      />
    </main>
  );
}

export default App;
