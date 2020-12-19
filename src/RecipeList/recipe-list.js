import React, {Component} from 'react';
import Recipe from '../Recipe/recipe';

class RecipeList extends Component {
    handleAddRecipe = () => {
        this.props.history.push('/recipes-add')
    }
    render () {
        let recipes;
        if(this.props.recipes.length !== 0){
            recipes = this.props.recipes.map((recipe, index) => {
                return <Recipe 
                    key={index} 
                    recipe={recipe} 
                    history={this.props.history}
                    handleUpdateRecipes={this.props.handleUpdateRecipes}
                    handleUpdateMealplan={this.props.handleUpdateMealplan}
                    />
            })
        }
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
                    <div className='center-div small-group'>
                        <button type='button' onClick={this.handleAddRecipe}>Add Recipe</button>
                    </div>
                </section>
        )
    }
}

export default RecipeList;