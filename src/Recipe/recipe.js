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
    handleAddRecipeMealPlan = (id) => {
        fetch(config.API_ENDPOINT + '/api/mealplan', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({recipe_id: id, qty: 1})
        })
        .then(res => {
            if(!res.ok){
                console.log(res)
            }
            this.props.handleUpdateMealplan()
            this.props.history.push('/mealplan')
        })
        .catch(error => {
            console.log(error)
        })
    }
    handleRemoveRecipe = (id) => {
        fetch(config.API_ENDPOINT + '/api/mealplan', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: id})
        })
        .then(res => {
            if(!res.ok){
                console.log(res)
            }
            this.props.handleUpdateMealplan()
        })
        .catch(error => {
            console.log(error)
        })
    }
    render () {
        let buttons;
        if(this.props.use === 'mealPlan'){
            buttons = (
                <>
                <td><Link to={`/recipes/${this.props.recipe.recipe_id}`}>{this.props.recipe.recipe_name}</Link></td>
                <td>{this.props.recipe.category}</td>
                <td><button type='button' onClick={() => this.handleRemoveRecipe(this.props.recipe.id)}>Remove</button></td>
            </>
            )
        }else{
            buttons = (
                <>
                <td><Link to={`/recipes/${this.props.recipe.id}`}>{this.props.recipe.recipe_name}</Link></td>
                <td>{this.props.recipe.category}</td>
                <td>{this.props.recipe.rating}</td>
                <td><button><Link to={`/recipes/${this.props.recipe.id}/edit`}>Edit</Link></button></td>                
                <td><button type='button' onClick={() => this.handleDeleteRecipe(this.props.recipe.id)}>Delete</button></td>
                <td><button type='button' onClick={() => this.handleAddRecipeMealPlan(this.props.recipe.id)}>Add to Meal Plan</button></td>
                </>)
        }
        return (
            <tr>

                {buttons}
            </tr>
        )
    }
}

export default Recipe