import React, {Component} from 'react';
import Header from '../Header/header';
import InventoryItem from '../InventoryItem/inventory-item';
import Recipes from '../recipes';
import {Link} from 'react-router-dom';

class RecipeDetail extends Component {
    render() {
        const recipe = Recipes.filter(r => {
            return r.id === Number(this.props.match.params.id)
        })[0]
        const ingredients = recipe.ingredients.map((item, index) => {
            return <InventoryItem key={index} item={item} recipe={true} />
        })
        const instructions = recipe.instructions.map((item, index) => {
            return <li key={index}>{item.content}</li>
        })
        return (
            <div>
                <Header />
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
                    <button><Link to={`/recipes/${this.props.match.params.id}/edit`}>Edit Recipe</Link></button>
                    <button>Use Recipe</button>
                </div>
            </div>
        )
    }
}

export default RecipeDetail;