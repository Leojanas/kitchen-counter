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
                    <h4 className='center'>{item.item_name}</h4>
                    <div className='form-group'>
                        <div className='form-item'>
                            <label htmlFor='qty'>Quantity: </label>
                            <input id='qty' name='qty' defaultValue={item.qty}/>
                        </div>
                        <div className='form-item'>
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
                        </div>
                    </div>
                    <br />
                    <div className='center-div small-group'>
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