import React, {Component} from 'react';

class AddItem extends Component {
    handleClickBack = () => {
        this.props.history.push('/inventory')
    }
    handleSubmitForm = (e) => {
        e.preventDefault();
        //add validation
        const item = {
            name: e.target.name.value,
            qty: e.target.qty.value,
            unit: e.target.unit.value,
            expiration: e.target.expiration.value
        }
        this.props.handleAddItem(item)
        this.props.history.push('/inventory')
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
                            <option value='pints'>pints</option>
                            <option value='cups'>cups</option>
                            <option value='tablespoons'>tablespoons</option>
                            <option value='teaspoons'>teaspoons</option>
                            <option value='each'>each</option>
                        </select>
                        <label htmlFor='expiration'>Expires on: </label>
                        <input id='expiration' name='expiration' type='date' />
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
