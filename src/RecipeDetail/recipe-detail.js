import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Helpers from '../helpers';

class RecipeDetail extends Component {
    handleClickBack = () => {
        this.props.history.push('/recipes')
    }
    render() {
        const recipe = Helpers.getItemById(this.props.recipes, this.props.match.params.id)
        const ingredients = Helpers.getIngredientsFromRecipe(recipe)
        const instructions = Helpers.getInstructionsFromRecipe(recipe)
        return (
            <div>
                <h2>{recipe.name}</h2>
                <p>{recipe.category}</p>
                <p>Rating: {recipe.rating}/5</p>
                <section>
                    <h3>Ingredients</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Ingredient</th>
                                <th>Qty</th>
                                <th>Unit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ingredients}
                        </tbody>
                    </table>
                </section>
                <section>
                    <h3>Instructions</h3>
                    <ol>
                        {instructions}
                    </ol>
                </section>
                <div>
                    <button type='button' onClick={this.handleClickBack}>Back</button>
                    <button><Link to={`/recipes/${this.props.match.params.id}/edit`}>Edit Recipe</Link></button>
                    <button>Use Recipe</button>
                </div>
            </div>
        )
    }
}

export default RecipeDetail;