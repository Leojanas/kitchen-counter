import React from 'react';
import {Route} from 'react-router-dom';
import Home from './Home/home';
import Inventory from './Inventory/inventory';
import RecipeList from './RecipeList/recipe-list';
import SignUp from './SignUp/sign-up';
import LogIn from './LogIn/log-in';
import RecipeDetail from './RecipeDetail/recipe-detail';
import ItemDetail from './ItemDetail/item-detail';
import EditItem from './EditItem/edit-item';
import EditRecipe from './EditRecipe/edit-recipe';

function App() {
  return (
    <main className='App'>
      <Route
        exact path='/'
        component={Home}
      />
      <Route 
        exact path='/inventory'
        component={Inventory}
      />
      <Route
        exact path='/inventory/:id'
        component={ItemDetail}
      />
      <Route
        path='/inventory/:id/edit'
        component={EditItem}
      />
      <Route
        exact path='/recipes'
        component={RecipeList}
      />
      <Route
        exact path='/recipes/:id'
        component={RecipeDetail}
      />
      <Route 
        path='/recipes/:id/edit'
        component={EditRecipe}
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
