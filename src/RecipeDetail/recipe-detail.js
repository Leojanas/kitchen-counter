import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Helpers from '../helpers';
import config from '../config';
import './recipe-detail.css';

class RecipeDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {error: false}
    }
    handleClickBack = () => {
        this.props.history.goBack()
    }
    handleUseRecipe = (recipe_id) => {
        let body = {recipe_id: recipe_id};
        fetch(config.API_ENDPOINT + '/api/inventory', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then((res) => {
            if(!res.ok){
                this.setState({error: true})
            }else{
                this.setState({error: false})
                this.props.handleUpdateInventory()
                this.props.history.push('/inventory')
            }
        })
        .catch(error => {
            console.log(error)
        })
    }
    render() {
        let error;
        if(this.state.error){
            error = (<div>
                <p>One or more items not found in sufficient quantity in inventory.  Recipe cannot be used.</p>
            </div>)
        }
        let ingredients;
        let instructions;
        if(this.props.recipes.length > 0){
            const recipe = Helpers.getItemById(this.props.recipes, this.props.match.params.id)
            if(recipe){
                ingredients = Helpers.getIngredientsFromRecipe(recipe)
                instructions = Helpers.getInstructionsFromRecipe(recipe)
            }
        return (
            <div>
                <h2>{recipe.recipe_name}</h2>
                <p className='center'>Category: {recipe.category}</p>
                <p className= 'center'>Rating: {recipe.rating}/5</p>
                <div className='group'>
                <section className='item'>
                    <h3>Ingredients</h3>
                    <table className='center-div'>
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
                <section className='item'>
                    <h3>Instructions</h3>
                    <ol>
                        {instructions}
                    </ol>
                </section>
                </div>
                <div className='center-div small-group'>
                    <button type='button' onClick={this.handleClickBack}>Back</button>
                    <button><Link to={`/recipes/${this.props.match.params.id}/edit`}>Edit Recipe</Link></button>
                    <button type='button' onClick={() => this.handleUseRecipe(recipe.id)}>Use Recipe</button>
                </div>
                {error}
            </div>
        )
        }
        return (<></>)
    }
}

export default RecipeDetail;