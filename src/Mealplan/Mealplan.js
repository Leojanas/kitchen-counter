import React, {Component} from 'react';
import Recipe from '../Recipe/recipe';
import InventoryItem from '../InventoryItem/inventory-item';

class Mealplan extends Component {
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
                    </tbody>
                </table>
                <div>
                    <button type='button'>Generate Shopping List</button>
                    <button type='button' onClick={this.props.handleEmptyMealPlan}>Empty Meal Plan</button>
                </div>
            </section>
    )
    }
}

export default Mealplan;

