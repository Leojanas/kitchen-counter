import React, {Component} from 'react';
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
import AddItem from './AddItem/add-item';
import Header from './Header/header';
import AddRecipe from './AddRecipe/add-recipe';
import Mealplan from './Mealplan/Mealplan';
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
      mealPlan: {recipes: [], items: []}
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
  }
  getInventory = (items) => {
    this.setState({items})
  }
  getRecipes = (recipes) => {
    recipes = Helpers.makeInstructionsArray(recipes)
    this.setState({recipes})
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
  handleUseRecipe = (id) => {
    let recipe = Helpers.getItemById(this.state.recipes, id)
    let ingredients = recipe.ingredients
    let inventoryNames = this.state.items.map(item => {
      return item.name
    });
    let error = false;
    ingredients.forEach(ingredient => {
      if(!inventoryNames.includes(ingredient.name)){
        console.log(ingredient.name + 'is not in inventory')
        error = true;
      }else{
        let inventoryQuantity = Helpers.getQtyFromName(this.state.items, ingredient.name);
        if(ingredient.qty > inventoryQuantity){
          console.log('Not enough '+ ingredient.name + ' in inventory.')
          error = true;
        }
      }
    });
    if(error){
      //need proper error response
    }else{
      ingredients.forEach(ingredient => {
        let items = this.state.items
        let item = Helpers.getItemByName(items, ingredient.name)
        item.qty = item.qty - ingredient.qty;
        items = items.map(i => {
          if(i.id === item.id){
            return item
          }else{
            return i
          }
        })
        this.setState({items})
      })
    }
  }
  handleAddRecipeMealPlan = (id) => {
    let recipe = this.state.recipes.filter(r => r.id === id);
    let mealPlan = this.state.mealPlan;
    mealPlan.recipes.push(recipe[0])
    this.setState({mealPlan})
  }
  handleAddItemMealPlan = (item) => {
    let mealPlan = this.state.mealPlan;
    mealPlan.items.push(item)
    console.log(mealPlan)
    this.setState({mealPlan})
  }
  handleRemoveRecipe = (i) => {
    let mealPlan = this.state.mealPlan;
    let recipes = mealPlan.recipes.filter((recipe,index) => {
      return index !== i
    })
    mealPlan = {...this.state.mealPlan, recipes}
    this.setState({mealPlan})
  }
  handleRemoveItem = (i) => {
    let mealPlan = this.state.mealPlan;
    let items = mealPlan.items.filter((item, index) => {
      return index !== i
    })
    mealPlan = {...this.state.mealPlan, items}
    this.setState({mealPlan})
  }
  handleEmptyMealPlan = () => {
    let mealPlan = {recipes: [], items: []}
    this.setState({mealPlan})
  }
  generateShoppingList = () => {

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
            handleAddRecipeMealPlan={this.handleAddRecipeMealPlan}
            
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
            handleUseRecipe={this.handleUseRecipe} 
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
            mealPlan={this.state.mealPlan}
            generateShoppingList={this.generateShoppingList}
            handleRemoveRecipe={this.handleRemoveRecipe}
            handleRemoveItem={this.handleRemoveItem}
            handleEmptyMealPlan={this.handleEmptyMealPlan}
            handleAddItemMealPlan={this.handleAddItemMealPlan}
          />
        }
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
}

export default App;
