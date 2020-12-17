import React, {Component} from 'react';
import Helpers from '../helpers';
import config from '../config';

class ItemDetail extends Component {
    handleClickBack = () => {
        this.props.history.push('/inventory')
    }
    handleClickEdit = () => {
        this.props.history.push(`/inventory/${this.props.match.params.id}/edit`)
    }
    handleDeleteItem = () => {
        fetch(config.API_ENDPOINT + `/api/inventory/${this.props.match.params.id}`, {
            method: 'DELETE'
        })
        .then(res => {
            if(!res.ok){
                //error handliing
            }
            this.props.handleUpdateInventory()
            this.props.history.push('/inventory')
        })
    }
    render() {
        const item = Helpers.getItemById(this.props.items, this.props.match.params.id)
        if(item){
            let expiration =  item.expiration ? item.expiration.split('T')[0] : null
        return (
            <div>
                <h3>{item.item_name}</h3>
                <p>Qty: {item.qty} {item.unit}</p>
                <p>Expires on: {expiration}</p>
                <div>
                    <button id='back' onClick={this.handleClickBack}>Back</button>
                    <button id='edit' onClick={this.handleClickEdit}>Edit</button>
                    <button id='delete' onClick={this.handleDeleteItem}>Delete</button>
                </div>
            </div>
        )
        }else{
            return <div>Loading...</div>
        }
    }
}

export default ItemDetail;

