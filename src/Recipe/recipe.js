import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Recipe extends Component {
    render () {
        return (
            <tr>
                <td><Link to={`/recipes/${this.props.recipe.id}`}>{this.props.recipe.name}</Link></td>
                <td>{this.props.recipe.category}</td>
                <td>{this.props.recipe.rating}</td>
                <td><button>Edit</button></td>
                <td><button>Remove</button></td>
            </tr>
        )
    }
}

export default Recipe