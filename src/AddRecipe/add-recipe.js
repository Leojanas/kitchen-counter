import React, {Component} from 'react';
import FormIngredient from '../FormIngredient/form-ingredient';

class AddRecipe extends Component {  
    constructor(props) {
        super(props)
        this.state = {
            recipe: {
                name: '',
                category: '',
                rating: 0,
                ingredients: [{
                    name: '',
                    qty: '',
                    unit: ''
                }],
                instructions: [{
                    number: 1,
                    content: ''
                }]
            }
        }
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
            name: '',
            qty: 0,
            unit: ''
        }
        let ingredients = this.state.recipe.ingredients;
        ingredients.push(emptyIngredient); 
        let recipe = {...this.state.recipe, ingredients};
        this.setState({recipe})
    }
    handleUpdateIngredient = (event) => {
        let value = event.target.value;
        let id = event.target.id.split('-');
        let index= id[1] -1;
        let attribute = id[2];
        let ingredient = this.state.recipe.ingredients[index];
        ingredient[attribute] = value;
        let ingredients = this.state.recipe.ingredients;
        ingredients[index] = ingredient;
        let recipe = {...this.state.recipe, ingredients}
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
    handleUpdateInstruction = (event) => {
        let content = event.target.value;
        let number = event.target.id.split('-')[1];
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
    handleAddRecipe = (e) => {
        e.preventDefault();
        this.props.handleAddRecipe(this.state.recipe)
        this.props.history.push('/recipes')
    }
    render() {
        let formIngredients;
        let formInstructions;
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
                <tr key={index}>
                <td>Step {i.number}</td>
                <td><input id={`instructions-${i.number}-content`} value={i.content} onChange={this.handleUpdateInstruction}/></td>
                </tr>
            )
        })
        return(
                <form onSubmit={this.handleAddRecipe}>
                    <label htmlFor='name'>Name: </label>
                    <input name='name' id='name' value={this.state.recipe.name} onChange={this.handleChange}/>
                    <label htmlFor='category'>Category: </label>
                    <select name='category' id='category' value={this.state.recipe.category} onChange={this.handleChange}>
                        <option value='Main'>Main</option>
                        <option value='Side'>Side</option>
                        <option value='Dessert'>Dessert</option>
                        <option value='Breakfast'>Breakfast</option>
                        <option value='Lunch'>Lunch</option>
                    </select>
                    <label htmlFor='rating'>Rating: </label>
                    <input id='rating' name='rating' value={this.state.recipe.rating} onChange={this.handleChange}/>
                    <fieldset>
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
                    <fieldset>
                        <legend>Instructions</legend>
                        <table>
                            <tbody>
                                {formInstructions}
                            </tbody>
                        </table>
                        <button type='button' onClick={this.handleAddStep}>Add Step</button>
                    </fieldset>
                    <button type='submit'>Save Recipe</button>
                </form>
        )
    }
}

export default AddRecipe;