import React, {Component} from 'react';
import FormIngredient from '../FormIngredient/form-ingredient';
import Helpers from '../helpers';
import PropTypes from 'prop-types';
import config from '../config';
import './edit-recipe.css';

class EditRecipe extends Component {  
    constructor(props) {
        super(props)
        let recipe = Helpers.getItemById(this.props.recipes, props.match.params.id)
        this.state = {
            recipes: props.recipes,
            recipe: recipe || {ingredients: [], instructions: [], name: ''},
        }
    }
    componentDidUpdate(props){
        let recipe = Helpers.getItemById(this.props.recipes, props.match.params.id)
        if(typeof(recipe) !== typeof(this.state.recipe))
        this.setState({
            recipe
        })
    }
    handleClickBack = () => {
        this.props.history.push('/recipes')
    }
    handleChange = (event) => {
        let field = event.target.id;
        let value = event.target.value;
        let recipe = this.state.recipe;
        recipe[field] = value;
        this.setState({recipe})
    }
    handleAddIngredient = () => {
        let emptyIngredient = {
            item_name: '',
            qty: 0,
            unit: 'pounds'
        }
        let ingredients = this.state.recipe.ingredients;
        ingredients.push(emptyIngredient); 
        let recipe = {...this.state.recipe, ingredients};
        this.setState({recipe})
    }
    handleRemoveIngredient = (event) => {
        let index = event.target.id.split('-')[1] -1;
        let ingredients = this.state.recipe.ingredients.filter((i, ind) => {
            return ind !== index
        })
        let recipe = {...this.state.recipe, ingredients}
        this.setState({recipe})
    }
    handleUpdateIngredient = (event) => {
        let value = event.target.value;
        let id = event.target.id.split('-');
        let index= id[1] -1;
        let attribute = id[2];
        if(attribute === 'item_name'){
            value = value.toLowerCase();
        }
        let ingredient = this.state.recipe.ingredients[index];
        ingredient[attribute] = value;
        let ingredients = this.state.recipe.ingredients;
        ingredients[index] = ingredient;
        let recipe = {...this.state.recipe, ingredients}
        this.setState({recipe})
    }
    handleAddStep = () => {
        let newStep = {
            number: (this.state.recipe.instructions.length + 1),
            content: ''
        }
        let instructions = this.state.recipe.instructions;
        instructions.push(newStep)
        let recipe = {...this.state.recipe, instructions}
        this.setState({recipe})
    }
    handleRemoveStep = (event) => {
        let number = Number(event.target.id.split('-')[1]);
        if(number === this.state.recipe.instructions.length){
            let instructions = this.state.recipe.instructions.filter(inst => {
                return inst.number !== number
            })
            let recipe = {...this.state.recipe, instructions}
            this.setState({recipe})
        }else{
            let instructions = this.state.recipe.instructions
            for(let i=number;i<this.state.recipe.instructions.length;i++){
                let content = this.state.recipe.instructions[i].content
                instructions[i-1] = {...instructions[i-1], content}
            }
            instructions.pop()
            let recipe = {...this.state.recipe, instructions}
            this.setState({recipe})
        }

    }
    handleUpdateInstruction = (event) => {
        let content = event.target.value;
        let number = Number(event.target.id.split('-')[1]);
        let instructions = this.state.recipe.instructions.map(inst => {
            if(inst.number === number){
                return {...inst, content: content}
            }else{
                return inst
            }
        })
        let recipe = {...this.state.recipe, instructions}
        this.setState({recipe})
    }
    handleEditRecipe = (e) => {
        e.preventDefault();
        let recipe = this.state.recipe;
        recipe = Helpers.stringifyRecipeInstructions(recipe)
        fetch(config.API_ENDPOINT + `/api/recipes/${this.props.match.params.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(recipe)
        })
        .then(() => {
            this.props.handleUpdateRecipes()
            this.props.history.push(`/recipes`)
        })

    }
    render() {
        let formIngredients;
        let formInstructions;
        if(this.state.recipe){
            formIngredients = this.state.recipe.ingredients.map((i, index) => {
            return <FormIngredient 
                item={i} 
                key={index} 
                number={index + 1} 
                handleUpdateIngredient={this.handleUpdateIngredient}
                handleRemoveIngredient={this.handleRemoveIngredient}
                />
            })   
            formInstructions = this.state.recipe.instructions.map((i, index) => {
            return (
                <div className='group' key={index}>
                <p className='item'>Step {i.number}</p>
                <textarea className='large-item' id={`instructions-${i.number}-content`} value={i.content} onChange={this.handleUpdateInstruction}/>
                <button className='item' type='button' id={`remove-${i.number}`} onClick={this.handleRemoveStep}>Remove</button>
                </div>
            )
            })
        return(
                <form onSubmit={this.handleEditRecipe}>
                    <div className='form-group'>
                        <div className='form-item'>
                            <label htmlFor='recipe_name'>Name: </label>
                            <input name='recipe_name' id='recipe_name' value={this.state.recipe.recipe_name} onChange={this.handleChange}/>
                        </div>
                        <div className='form-item'>
                            <label htmlFor='category'>Category: </label>
                                <select name='category' id='category' value={this.state.recipe.category} onChange={this.handleChange}>
                                    <option value='Main'>Main</option>
                                    <option value='Side'>Side</option>
                                    <option value='Dessert'>Dessert</option>
                                    <option value='Breakfast'>Breakfast</option>
                                    <option value='Lunch'>Lunch</option>
                                </select>
                        </div>
                        <div className='form-item'>
                            <label htmlFor='rating'>Rating: </label>
                            <input id='rating' name='rating' value={this.state.recipe.rating} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <fieldset className='form-fieldset'>
                        <legend>Ingredients</legend>
                        <table>
                        <thead>
                            <tr>
                                <th>Ingredient</th>
                                <th>Qty</th>
                                <th>Unit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {formIngredients}
                        </tbody>
                    </table>
                    <button type='button' onClick={this.handleAddIngredient}>Add Ingredient</button>
                    </fieldset>
                    <fieldset className='form-fieldset'>
                        <legend>Instructions</legend>
                            {formInstructions}
                        <button type='button' onClick={this.handleAddStep}>Add Step</button>
                    </fieldset>
                    <div className='center-div small-group'>
                        <button type='button' onClick={this.handleClickBack}>Back</button>
                        <button type='submit'>Save Recipe</button>
                    </div>
                </form>
        )
        }else{
            return (
                <div><p>Loading recipe...</p></div>
            )
        }
    }
}

export default EditRecipe;

EditRecipe.propTypes = {
    match: PropTypes.shape({params: PropTypes.shape({id: PropTypes.string.isRequired})}),
    history: PropTypes.object.isRequired,
    recipes: PropTypes.array
}