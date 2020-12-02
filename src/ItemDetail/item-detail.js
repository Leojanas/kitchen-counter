import React, {Component} from 'react';
import Helpers from '../helpers';

class ItemDetail extends Component {
    handleClickBack = () => {
        this.props.history.push('/inventory')
    }
    handleClickEdit = () => {
        this.props.history.push(`/inventory/${this.props.match.params.id}/edit`)
    }
    render() {
        const item = Helpers.getItemById(this.props.items, this.props.match.params.id)
        return (
            <div>
                <h3>{item.item_name}</h3>
                <p>Qty: {item.qty} {item.unit}</p>
                <p>Expires on: {item.expiration.split('T')[0]}</p>
                <div>
                    <button id='back' onClick={this.handleClickBack}>Back</button>
                    <button id='edit' onClick={this.handleClickEdit}>Edit</button>
                    <button>Delete</button>
                </div>
            </div>

        )
    }
}

export default ItemDetail;

