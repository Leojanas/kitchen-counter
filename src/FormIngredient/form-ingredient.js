import React, {Component} from 'react';
import './form-ingredient.css';

class FormIngredient extends Component {
    render() {
        let buttons;
        if(this.props.use === 'mealPlan'){
            buttons = (
                <>
                    <td><button type='button' id={`save-${this.props.item.id}`} onClick={this.props.handleSaveItem}>Save</button>
                    <button type='button' id={`remove-${this.props.item.id}`} onClick={this.props.handleRemoveIngredient}>Remove</button></td>
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
                <td><input className='name-input' id={`ingredients-${this.props.number}-item_name`} value={this.props.item.item_name} onChange={this.props.handleUpdateIngredient}/></td>
                <td><input className='qty-input' id={`ingredients-${this.props.number}-qty`} value={this.props.item.qty} onChange={this.props.handleUpdateIngredient}/></td>
                <td><select name='unit' id={`ingredients-${this.props.number}-unit`} value={this.props.item.unit} onChange={this.props.handleUpdateIngredient}>
                            <option value='pounds'>pounds</option>
                            <option value='ounces'>ounces</option>
                            <option value='gallons'>gallons</option>
                            <option value='quarts'>quarts</option>
                            <option value='pints'>pints</option>
                            <option value='cups'>cups</option>
                            <option value='tablespoons'>tablespoons</option>
                            <option value='teaspoons'>teaspoons</option>
                            <option value='each'>each</option>
                        </select></td>
                 {buttons}           
            </tr>
        )

    }
}

export default FormIngredient;