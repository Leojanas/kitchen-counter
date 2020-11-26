import React, {Component} from 'react';

class FormIngredient extends Component {
    render() {
        let buttons;
        if(this.props.use === 'mealPlan'){
            buttons = (
                <>
                    <td><button type='button' id={`save-${this.props.number}`} onClick={this.props.handleSaveItem}>Save</button></td>
                    <td><button type='button' id={`remove-${this.props.number}`} onClick={this.props.handleRemoveIngredient}>Remove</button></td>

                </>
            )
        }else {
            buttons = (
                <>
                    <td><button type='button' id={`remove-${this.props.number}`} onClick={this.props.handleRemoveIngredient}>Remove</button></td>
                </>
            )
        }
        return (
            <tr>
                <td><input id={`ingredients-${this.props.number}-name`} value={this.props.item.name} onChange={this.props.handleUpdateIngredient}/></td>
                <td><input id={`ingredients-${this.props.number}-qty`} value={this.props.item.qty} onChange={this.props.handleUpdateIngredient}/></td>
                <td><input id={`ingredients-${this.props.number}-unit`} value={this.props.item.unit} onChange={this.props.handleUpdateIngredient}/></td>
                 {buttons}           
            </tr>
        )

    }
}

export default FormIngredient;