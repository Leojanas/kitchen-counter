import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Helpers from '../helpers';
import config from '../config';

class RecipeDetail extends Component {
    handleClickBack = () => {
        this.props.history.goBack()
    }
    handleUseRecipe = (recipe_id) => {
        let body = {recipe_id: recipe_id};
        console.log(body)
        fetch(config.API_ENDPOINT + '/api/inventory', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then((res) => {
            if(!res.ok){
                console.log(res)
            }
            this.props.handleUpdateInventory()
            this.props.history.push('/inventory')
        })
        .catch(error => {
            console.log(error)
        })
    }
    render() {
        let ingredients;
        let instructions;
        if(this.props.recipes.length > 0){
            const recipe = Helpers.getItemById(this.props.recipes, this.props.match.params.id)
            ingredients = Helpers.getIngredientsFromRecipe(recipe)
            instructions = Helpers.getInstructionsFromRecipe(recipe)
        return (
            <div>
                <h2>{recipe.recipe_name}</h2>
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
                    <button type='button' onClick={() => this.handleUseRecipe(recipe.id)}>Use Recipe</button>
                </div>
            </div>
        )
        }
        return (<></>)
    }
}

export default RecipeDetail;