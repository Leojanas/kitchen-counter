import React, {Component} from 'react';
import Helpers from '../helpers';
import config from '../config';

class EditItem extends Component {
    handleClickBack = () => {
        this.props.history.push('/inventory')
    }
    handleEditItem = (e) => {
        e.preventDefault();
        let item = Helpers.getItemById(this.props.items, this.props.match.params.id)
        item.qty = e.target.qty.value 
        item.expiration = e.target.expiration.value
        item.unit = e.target.unit.value
        fetch(config.API_ENDPOINT + `/api/inventory/${item.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        })
        .then(res => {
            if(!res.ok){
                console.log(res)
            }
        })
        .then(() => {
            this.props.handleUpdateInventory()
            this.props.history.push('/inventory')
        })
    }
    render() {
        const item = Helpers.getItemById(this.props.items, this.props.match.params.id)
        if(item){
        return (
            <div>
                <h2>Edit Item</h2>
                <form onSubmit={this.handleEditItem}>
                    <h3>{item.item_name}</h3>
                    <label htmlFor='qty'>Quantity: </label>
                    <input id='qty' name='qty' defaultValue={item.qty}/>
                    <select name='unit' id='unit' defaultValue={item.unit}>
                            <option value='pounds'>pounds</option>
                            <option value='ounces'>ounces</option>
                            <option value='gallons'>gallons</option>
                            <option value='quarts'>quarts</option>
                            <option value='pints'>pints</option>
                            <option value='cups'>cups</option>
                            <option value='tablespoons'>tablespoons</option>
                            <option value='teaspoons'>teaspoons</option>
                            <option value='each'>each</option>
                        </select>
                    <br />
                    <label htmlFor='expiration'>Expires on: </label>
                    <input 
                        id='expiration' 
                        name='expiration' 
                        type='date' 
                        defaultValue={item.expiration?item.expiration.split('T')[0]:null}  
                    />

                    <div>
                        <button type='button' onClick={this.handleClickBack}>Back</button>
                        <button type='submit'>Save</button>
                    </div>
                </form>
            </div>
        )}else{
            return <div>Loading...</div>
        }
    }
}

export default EditItem;