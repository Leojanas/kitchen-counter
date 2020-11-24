import React, {Component} from 'react';
import Header from '../Header/header';
import Recipes from '../recipes';
import FormIngredient from '../FormIngredient/form-ingredient';

class EditRecipe extends Component {
     constructor(props){
         super(props)
         let recipe = Recipes.filter(r => {
            return r.id === Number(this.props.match.params.id)
        })[0]
        this.state = {
            recipe: recipe
        }
     }   

    
    handleAddIngredient = () => {
        let emptyIngredient = {
            id: (this.state.recipe.ingredients.length + 1),
            name: '',
            qty: 0,
            unit: ''
        }
        let recipe = this.state.recipe;
        let ingredients = recipe.ingredients;
        ingredients.push(emptyIngredient);
        recipe = {...recipe, ingredients};
        this.setState({
            recipe
        })
    }
    handleAddStep = () => {
        let newStep = {
            number: (this.state.recipe.instructions.length + 1),
            content: ''
        }
        let recipe = this.state.recipe;
        let instructions = recipe.instructions;
        instructions.push(newStep)
        recipe = {...recipe, instructions}
        this.setState({
            recipe
        })
    }
    render() {
        let formIngredients;
        let formInstructions;
        formIngredients = this.state.recipe.ingredients.map((i, index) => {
            return <FormIngredient item={i} key={index} />
        })
        formInstructions = this.state.recipe.instructions.map((i, index) => {
            return (
                <tr key={index}>
                <td>Step {index + 1}</td>
                <td><input defaultValue={i.content}/></td>
                </tr>
            )
        })
        return(
            <div>
                <Header />
                <form>
                    <h3>{this.state.recipe.name}</h3>
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
            </div>
        )
    }
}

export default EditRecipe;