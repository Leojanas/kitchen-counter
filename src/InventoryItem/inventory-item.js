import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import config from '../config';


class InventoryItem extends Component {
    handleDeleteItem = (id) => {
        fetch(config.API_ENDPOINT + `/api/inventory/${id}`, {
            method: 'DELETE'
        })
        .then(() => {
            this.props.handleUpdateInventory()
        })
        .catch(e => console.log(e))
    }
    render () {
        let buttons;
        if(this.props.use === 'inventory'){
            buttons = (
            <>
                <td><Link to={`/inventory/${this.props.item.id}`}>{this.props.item.item_name}</Link></td>
                <td>{this.props.item.qty}</td>
                <td>{this.props.item.unit}</td>
                <td><button><Link to={`/inventory/${this.props.item.id}/edit`} >Edit</Link></button></td>
                <td><button type='button' onClick={() => this.handleDeleteItem(this.props.item.id)}>Delete</button></td>
            </>
            )
        }else if(this.props.use === 'mealPlan'){
            buttons = (
                <>
                    <td>{this.props.item.item_name}</td>
                    <td>{this.props.item.qty}</td>
                    <td>{this.props.item.unit}</td>
                    <td><button type='button' onClick={() => this.props.handleRemoveItem(this.props.item.id)}>Remove</button></td>
                </>
            )
        }else if(this.props.use === 'shoppingList'){
            buttons = (
                <>
                    <td>{this.props.item.item_name}</td>
                    <td>{this.props.item.qty}</td>
                    <td>{this.props.item.unit}</td>
                </>
            )
        }else {
            buttons = (
                <>
                    <td>{this.props.item.item_name}</td>
                    <td>{this.props.item.qty}</td>
                    <td>{this.props.item.unit}</td>
                </>
            )
        }

        return (
                <tr>

                    {buttons}
                </tr>
        )
    }
}

export default InventoryItem;