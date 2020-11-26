import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class InventoryItem extends Component {
    render () {
        let buttons;
        if(this.props.use === 'inventory'){
            buttons = (
            <>
                <td><button><Link to={`/inventory/${this.props.item.id}/edit`} >Edit</Link></button></td>
                <td><button type='button' onClick={() => this.props.handleDeleteItem(this.props.item.id)}>Delete</button></td>
            </>
            )
        }else if(this.props.use === 'mealPlan'){
            buttons = (
                <>
                    <td><button type='button' onClick={() => this.props.handleRemoveItem(this.props.remove)}>Remove</button></td>
                </>
            )
        }

        return (
                <tr>
                    <td><Link to={`/inventory/${this.props.item.id}`}>{this.props.item.name}</Link></td>
                    <td>{this.props.item.qty}</td>
                    <td>{this.props.item.unit}</td>
                    {buttons}
                    
                </tr>
        )
    }
}

export default InventoryItem;