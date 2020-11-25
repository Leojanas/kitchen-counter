import React, {Component} from 'react';
import Recipe from '../Recipe/recipe';

class RecipeList extends Component {
    handleAddRecipe = () => {
        this.props.history.push('/recipes-add')
    }
    render () {
        const recipes = this.props.recipes.map((recipe, index) => {
            return <Recipe 
                key={index} 
                recipe={recipe} 
                handleDeleteRecipe={this.props.handleDeleteRecipe}
                handleAddMealPlan={this.props.handleAddMealPlan}
                />
        })
        return (
                <section>
                    <h2>My Recipes</h2>
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
                    <button type='button' onClick={this.handleAddRecipe}>Add Recipe</button>
                </section>
        )
    }
}

export default RecipeList;