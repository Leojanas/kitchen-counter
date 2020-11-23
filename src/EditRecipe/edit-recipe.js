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
        let ingredients = recipe.ingredients.map((ingredient, index) => {
            return <FormIngredient item={ingredient} key={index} />
        })
        let instructions = recipe.instructions
        this.state = {
            ingredients: ingredients,
            recipe: recipe
        }
     }   

    
    handleAddIngredient = () => {
        let ingredients = this.state.ingredients;
        ingredients.push(<FormIngredient />)
        this.setState({
            ingredients
        })
    }
    handleAddStep = () => {

    }
    render() {
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
                            {this.state.ingredients}
                        </tbody>
                    </table>
                    <button type='button' onClick={this.handleAddIngredient}>Add Ingredient</button>
                    </fieldset>
                    <fieldset>
                        <legend>Instructions</legend>
                        <table>
                            <tbody>
                                {}
                            </tbody>
                        </table>
                        <button type='button' onClick={this.handleAddStep}>Add Step</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default EditRecipe;