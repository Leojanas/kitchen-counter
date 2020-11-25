import React, {Component} from 'react';
import Helpers from '../helpers';

class EditItem extends Component {
    handleClickBack = () => {
        this.props.history.push('/inventory')
    }
    handleEditItem = (e) => {
        e.preventDefault();
        let item = Helpers.getItemById(this.props.items, this.props.match.params.id)
        item.qty = e.target.qty.value 
        item.expiration = e.target.expiration.value
        this.props.handleEditItem(item)
        this.props.history.push('/inventory')
    }
    render() {
        const item = Helpers.getItemById(this.props.items, this.props.match.params.id)
        return (
            <div>
                <h2>Edit Item</h2>
                <form onSubmit={this.handleEditItem}>
                    <h3>{item.name}</h3>
                    <label htmlFor='qty'>Quantity: </label>
                    <input id='qty' name='qty' defaultValue={item.qty} onChange={this.handleChangeQuantity}/>
                    <label htmlFor='qty'>{item.unit}</label>
                    <br />
                    <label htmlFor='expiration'>Expires on: </label>
                    <input 
                        id='expiration' 
                        name='expiration' 
                        type='date' 
                        defaultValue={item.expiration} 
                        onChange={this.handleChangeExpiration} 
                    />

                    <div>
                        <button type='button' onClick={this.handleClickBack}>Back</button>
                        <button type='submit'>Save</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default EditItem;