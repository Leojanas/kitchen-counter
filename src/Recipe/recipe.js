import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import config from '../config';

class Recipe extends Component {
    handleDeleteRecipe = (id) => {
        fetch(config.API_ENDPOINT + `/api/recipes/${id}`, {
            method: 'DELETE',
        })
        .then((res) => {
            if(!res.ok){
                //error handling
            }
            this.props.handleUpdateRecipes();
        })
    }
    render () {
        let buttons;
        if(this.props.use === 'mealPlan'){
            buttons = (
                <td><button type='button' onClick={() => this.props.handleRemoveRecipe(this.props.remove)}>Remove</button></td>
            )
        }else{
            buttons = (
                <>
                <td><button><Link to={`/recipes/${this.props.recipe.id}/edit`}>Edit</Link></button></td>                
                <td><button type='button' onClick={() => this.handleDeleteRecipe(this.props.recipe.id)}>Delete</button></td>
                <td><button type='button' onClick={() => this.props.handleAddRecipeMealPlan(this.props.recipe.id)}>Add to Meal Plan</button></td>
                </>)
        }
        return (
            <tr>
                <td><Link to={`/recipes/${this.props.recipe.id}`}>{this.props.recipe.recipe_name}</Link></td>
                <td>{this.props.recipe.category}</td>
                <td>{this.props.recipe.rating}</td>
                {buttons}
            </tr>
        )
    }
}

export default Recipe