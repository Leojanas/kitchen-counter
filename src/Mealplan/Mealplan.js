import React, {Component} from 'react';
import Recipe from '../Recipe/recipe';
import FormIngredient from '../FormIngredient/form-ingredient';
import InventoryItem from '../InventoryItem/inventory-item';

class Mealplan extends Component {
    constructor(props){
        super(props)
        this.state = {
            ingredients: [],
            count: 0
        }
    }
    handleAddItemMealPlan = () => {
        const id = this.state.count;
        let count = this.state.count + 1;
        this.setState({count})

        let item = {
            id: id,
            name: '',
            qty: 0,
            unit: ''
        };
        let ingredients = this.state.ingredients;
        ingredients.push(item);
        this.setState({ingredients})
    }
    handleRemoveIngredient = (e) => {
        e.preventDefault();
        let id = Number(e.target.id.split('-')[1]);
        let ingredients = this.state.ingredients.filter(item => {
            return item.id !== id
        })
        this.setState({ingredients})
    }
    handleSaveItem = (e) => {
        e.preventDefault();
        let id = Number(e.target.id.split('-')[1]);
        let item = this.state.ingredients.filter(item => {
            return item.id === id
        })[0]
        let ingredients = this.state.ingredients.filter(item => {
            return item.id !== id
        })
        this.setState({ingredients})
        this.props.handleAddItemMealPlan(item)

    }
    handleUpdateIngredient = (event) => {
        let value = event.target.value;
        let id = Number(event.target.id.split('-')[1]);
        let index= this.state.ingredients.findIndex(item => {
            return item.id === id
        })
        let attribute = event.target.id.split('-')[2];
        let ingredient = this.state.ingredients[index];
        ingredient[attribute] = value;
        let ingredients = this.state.ingredients;
        ingredients[index] = ingredient;
        this.setState({ingredients})
    }
    render () {
        const recipes = this.props.mealPlan.recipes.map((recipe, index) => {
            return <Recipe 
                key={index} 
                recipe={recipe}
                remove={index} 
                use='mealPlan'
                handleRemoveRecipe={this.props.handleRemoveRecipe}
            />
        })
        const items = this.props.mealPlan.items.map((item, index) => {
            return <InventoryItem 
                key={index}
                item={item}
                remove={index}
                use='mealPlan'
                handleRemoveItem={this.props.handleRemoveItem}
            />
        })
        const formItems = this.state.ingredients.map(item => {
            return <FormIngredient
                key={item.id}
                item={item}
                number={item.id}
                use='mealPlan'
                handleRemoveIngredient={this.handleRemoveIngredient}
                handleSaveItem={this.handleSaveItem}
                handleUpdateIngredient={this.handleUpdateIngredient}
            />
        })
        return (
            <section>
                <h2>My Meal Plan</h2>
                <h3>Recipes</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Recipe Name</th>
                            <th>Category</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recipes}
                    </tbody>
                </table>
                <h3>Miscellaneous Items</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Quantity</th>
                            <th>Unit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items}
                        {formItems}
                    </tbody>
                </table>
                <button type='button' onClick={this.handleAddItemMealPlan}>Add Item</button>
                <div>
                    <button type='button' onClick={this.props.generateShoppingList}>Generate Shopping List</button>
                    <button type='button' onClick={this.props.handleEmptyMealPlan}>Empty Meal Plan</button>
                </div>
            </section>
    )
    }
}

export default Mealplan;

