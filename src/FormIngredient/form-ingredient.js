import React, {Component} from 'react';

class FormIngredient extends Component {
    render() {
        if(this.props.item){
            return (
                <tr>
                    <td><input defaultValue={this.props.item.name}/></td>
                    <td><input defaultValue={this.props.item.qty}/></td>
                    <td><input defaultValue={this.props.item.unit}/></td>            
                </tr>
            )
        }else{
            return (
                <tr>
                    <td><input /></td>
                    <td><input /></td>
                    <td><input /></td>            
                </tr>
            )
        }

    }
}

export default FormIngredient;