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
import Recipes from './recipes';
import Items from './items';
import Mealplan from './Mealplan/Mealplan';
import Helpers from './helpers';


class App extends Component {
  constructor(props) {
    super(props)
    const items = Items;
    const recipes = Recipes;
    this.state = {
      items,
      recipes,
      mealPlan: {recipes: [], items: []}
    }
  }
  handleDeleteRecipe = (id) => {
    let recipes = this.state.recipes;
    recipes = recipes.filter(r => {
      return r.id !== id
    })
    this.setState({recipes})
  }
  handleEditRecipe = (recipe) => {
    let recipes = this.state.recipes;
    recipes = recipes.map(r => {
      if(r.id === recipe.id){
        return recipe
      }else{
        return r
      }
    })
    this.setState({recipes})
  }
  handleAddRecipe = (recipe) => {
    let recipes = this.state.recipes;
    let id = recipes.length + 1;
    recipe = {...recipe, id: id}
    recipes.push(recipe)
    this.setState({recipes})
  }
  handleDeleteItem = (id) => {
    let items = this.state.items;
    items = items.filter(i => {
      return i.id !== id
    })
    this.setState({items})
  }
  handleAddItem = (item) => {
    let items = this.state.items;
    let id= (items.length + 1);
    item = {...item, id: id};
    items.push(item);
    this.setState({items})
  }
  handleEditItem = (item) => {
    let items = this.state.items;
    items = items.filter(i => {
      if(i.id === item.id){
        return item
      }else{
        return i
      }
    })
    this.setState({items})
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
  handleAddItemMealPlan = (id) => {
    let item = this.state.items.filter(i => i.id === id);
    let mealPlan = this.state.mealPlan;
    mealPlan.items.push(item[0])
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
          handleDeleteItem={this.handleDeleteItem}
          handleAddItemMealPlan={this.handleAddItemMealPlan}
        />
        }
      />
      <Route
        path='/inventory-add'
        render={({history}) =>
          <AddItem
            history={history}
            handleAddItem={this.handleAddItem}
          />
        }
      />
      <Route
        exact path='/inventory/:id'
        render={({match, history}) => <ItemDetail items={this.state.items} match={match} history={history}/>}
      />
      <Route
        path='/inventory/:id/edit'
        render={({history, match}) => 
          <EditItem
            items={this.state.items}
            history={history}
            match={match}
            handleEditItem={this.handleEditItem}
          />
        }
      />
      <Route
        exact path='/recipes'
        render={({history}) =>
          <RecipeList 
            recipes={this.state.recipes}
            history={history} 
            handleDeleteRecipe={this.handleDeleteRecipe}
            handleAddRecipeMealPlan={this.handleAddRecipeMealPlan}
            
          />
        }
      />
      <Route
        path='/recipes-add'
        render={({history}) => 
          <AddRecipe
            history={history}
            handleAddRecipe={this.handleAddRecipe}
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
            handleEditRecipe={this.handleEditRecipe}
          />
        }
      />
      <Route
        path='/mealplan'
        render={({history}) =>
          <Mealplan 
            history={history}
            mealPlan={this.state.mealPlan}
            handleRemoveRecipe={this.handleRemoveRecipe}
            handleRemoveItem={this.handleRemoveItem}
            handleEmptyMealPlan={this.handleEmptyMealPlan}
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
