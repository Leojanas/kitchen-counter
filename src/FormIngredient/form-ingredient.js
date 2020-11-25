import React, {Component} from 'react';

class FormIngredient extends Component {
    render() {
        return (
            <tr>
                <td><input id={`ingredients-${this.props.number}-name`} value={this.props.item.name} onChange={this.props.handleUpdateIngredient}/></td>
                <td><input id={`ingredients-${this.props.number}-qty`} value={this.props.item.qty} onChange={this.props.handleUpdateIngredient}/></td>
                <td><input id={`ingredients-${this.props.number}-unit`} value={this.props.item.unit} onChange={this.props.handleUpdateIngredient}/></td>
                <td><button type='button' id={`remove-${this.props.number}`} onClick={this.props.handleRemoveIngredient}>Remove</button></td>            
            </tr>
        )

    }
}

export default FormIngredient;