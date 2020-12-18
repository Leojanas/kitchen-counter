import React, {Component} from 'react';
import config from '../config';

class AddItem extends Component {
    handleClickBack = () => {
        this.props.history.push('/inventory')
    }
    handleSubmitForm = (e) => {
        e.preventDefault();
        //add validation
        const item = {
            item_name: e.target.name.value.toLowerCase(),
            qty: e.target.qty.value,
            unit: e.target.unit.value
        }
        fetch(config.API_ENDPOINT + '/api/inventory', {
            method: 'POST',
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
        })
        .then(() => {
            this.props.history.push('/inventory')
        })
        .catch(e => console.log(e))
    }
    render() {
        return (
                <section>
                    <h2>Add Item</h2>
                    <form onSubmit={this.handleSubmitForm}>
                        <label htmlFor='name'>Name: </label>
                        <input id='name' name='name' />
                        <label htmlFor='qty'>Quantity: </label>
                        <input id='qty' name='qty' />
                        <select name='unit' id='unit'>
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
                        <div>
                            <button type='submit'>Add Item</button>
                            <button type='button' onClick={this.handleClickBack}>Back</button>
                        </div>

                    </form>
                </section>
        )
    }
}

export default AddItem;
