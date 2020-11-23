import React, {Component} from 'react';
import Items from '../items';
import Header from '../Header/header';

class ItemDetail extends Component {
    handleClickBack = () => {
        this.props.history.push('/inventory')
    }
    handleClickEdit = () => {
        this.props.history.push(`/inventory/${this.props.match.params.id}/edit`)
    }
    render() {
        const item = Items.filter(item => {
            return item.id === Number(this.props.match.params.id)
        })[0]
        return (
            <div>
                <Header />
                <h3>{item.name}</h3>
                <p>Qty: {item.qty} {item.unit}</p>
                <p>Expires on: {item.expiration}</p>
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

