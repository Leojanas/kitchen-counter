import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Home from './Home/home';
import Inventory from './Inventory/inventory';
import RecipeList from './RecipeList/recipe-list';
import RecipeDetail from './RecipeDetail/recipe-detail';
import ItemDetail from './ItemDetail/item-detail';
import EditItem from './EditItem/edit-item';
import EditRecipe from './EditRecipe/edit-recipe';
import AddItem from './AddItem/add-item';
import Header from './Header/header';
import AddRecipe from './AddRecipe/add-recipe';
import Mealplan from './Mealplan/Mealplan';
import ShoppingList from './ShoppingList/shopping-list';
import Helpers from './helpers';
import config from './config';


class App extends Component {
  constructor(props) {
    super(props)
    const items = [];
    const recipes = [];
    this.state = {
      items,
      recipes,
      mealplan: {recipes: [], items: []},
      shoppingList: []
    }
  }
  componentDidMount() {
    fetch(config.API_ENDPOINT + '/api/inventory', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(response => {
      this.getInventory(response)
    })
    fetch(config.API_ENDPOINT + '/api/recipes', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(response => {
      this.getRecipes(response)
    })
    fetch(config.API_ENDPOINT + '/api/mealplan', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(response => {
      this.getMealplan(response)
    })
    fetch(config.API_ENDPOINT + '/api/shopping-list', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(response => {
      this.getShoppingList(response)
    })
  }
  getInventory = (items) => {
    this.setState({items})
  }
  getRecipes = (recipes) => {
    Helpers.makeInstructionsArray(recipes)
    .then(recipes => {
      return this.setState({recipes})
    })

  }
  getMealplan = (mealplan) => {
    this.setState({mealplan})
  }
  getShoppingList = (shoppingList) => {
    this.setState({shoppingList})
  }
  handleUpdateInventory = () => {
    fetch(config.API_ENDPOINT + '/api/inventory', {
      method: 'GET'
    })
    .then(res => {
      if(!res.ok){
        console.log(res)
      }
      return res.json()
    })
    .then(items => {
      this.getInventory(items)
    })
    .catch(e => console.log(e))
  }
  handleUpdateRecipes = () => {
    fetch(config.API_ENDPOINT + '/api/recipes', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(recipes => {
      return this.getRecipes(recipes)
    })
    .catch(e => console.log(e))
  }
  handleUpdateMealplan = () => {
    fetch(config.API_ENDPOINT + '/api/mealplan', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(response => {
      return this.getMealplan(response)
    })
  }
  handleUpdateShoppingList = () => {
    fetch(config.API_ENDPOINT + '/api/shopping-list', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(response => {
      return this.getShoppingList(response)
    })
  }
  render(){
  return (
    <main className='App'>
      <Header />
      <Route
        exact path='/'
        component={Home}
      />
      <Route 
        exact path='/inventory'
        render={({history}) => 
        <Inventory 
          history={history}
          items={this.state.items} 
          handleUpdateInventory={this.handleUpdateInventory}
        />
        }
      />
      <Route
        path='/inventory-add'
        render={({history}) =>
          <AddItem
            history={history}
            handleUpdateInventory={this.handleUpdateInventory}
          />
        }
      />
      <Route
        exact path='/inventory/:id'
        render={({match, history}) => <ItemDetail 
        items={this.state.items} 
        match={match} 
        history={history}
        handleUpdateInventory={this.handleUpdateInventory}
        />}
      />
      <Route
        path='/inventory/:id/edit'
        render={({history, match}) => 
          <EditItem
            items={this.state.items}
            history={history}
            match={match}
            handleUpdateInventory={this.handleUpdateInventory}
          />
        }
      />
      <Route
        exact path='/recipes'
        render={({history}) =>
          <RecipeList 
            recipes={this.state.recipes}
            history={history} 
            handleUpdateRecipes={this.handleUpdateRecipes}
            handleUpdateMealplan={this.handleUpdateMealplan}
            
          />
        }
      />
      <Route
        path='/recipes-add'
        render={({history}) => 
          <AddRecipe
            history={history}
            handleUpdateRecipes={this.handleUpdateRecipes}
          />
        }
      />
      <Route
        exact path='/recipes/:id'
        render={({match, history}) => 
          <RecipeDetail  
            match={match} 
            history={history}
            recipes={this.state.recipes}
            handleUpdateInventory={this.handleUpdateInventory} 
          />
        }
      />
      <Route 
        path='/recipes/:id/edit'
        render={({match, history}) => 
          <EditRecipe
            match={match}
            history={history}
            recipes={this.state.recipes}
            handleUpdateRecipes={this.handleUpdateRecipes}
          />
        }
      />
      <Route
        path='/mealplan'
        render={({history}) =>
          <Mealplan 
            history={history}
            mealplan={this.state.mealplan}
            handleUpdateShoppingList={this.handleUpdateShoppingList}
            handleUpdateMealplan={this.handleUpdateMealplan}
          />
        }
      />
      <Route
        path='/shopping-list'
        render={({history}) =>
          <ShoppingList 
            history={history}
            shoppingList={this.state.shoppingList}
            handleUpdateShoppingList={this.handleUpdateShoppingList}
            handleUpdateInventory={this.handleUpdateInventory}
          />
        }
      />
    </main>
  );
  }
}

export default App;
