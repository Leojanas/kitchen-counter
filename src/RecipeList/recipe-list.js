import React, {Component} from 'react';
import Header from '../Header/header';
import Recipe from '../Recipe/recipe';
import Recipes from '../recipes';

class RecipeList extends Component {
    render () {
        const recipes = Recipes.map((recipe, index) => {
            return <Recipe key={index} recipe={recipe} />
        })
        return (
            <div>
                <Header />
                <section>
                    <h2>My Recipes</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Recipe Name</th>
                                <th>Category</th>
                                <th>Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recipes}
                        </tbody>
                    </table>
                </section>
                
            </div>
        )
    }
}

export default RecipeList;