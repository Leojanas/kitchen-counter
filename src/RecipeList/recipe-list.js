import React, {Component} from 'react';
import Header from '../Header/header';
import Recipe from '../Recipe/recipe';

class RecipeList extends Component {
    render () {
        const Recipes = [
            {id: 1, name: 'Sweet Potato Casserole', category: 'Dinner Side', rating: 5},
            {id: 2, name: 'Tacos', category: 'Dinner Main', rating: 4}
        ]
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