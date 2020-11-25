import react, {Component} from 'react';
import Recipe from '../Recipe/recipe';

class Mealplan extends Component {
    render () {
        const recipes = this.props.mealPlan.recipes.map((recipe, index) => {
            return <Recipe 
                key={index} 
                recipe={recipe} 
                use='mealPlan'
                handleRemoveRecipe={this.props.handleRemoveRecipe}
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

                    </tbody>
                </table>
            </section>
    )
    }
}

export default Mealplan;

