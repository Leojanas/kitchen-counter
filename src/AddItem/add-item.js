import React, {Component} from 'react';
import Header from '../Header/header';

class AddItem extends Component {
    handleClickBack = () => {
        this.props.history.push('/inventory')
    }
    render() {
        return (
            <>
                <Header />
                <section>
                    <h2>Add Item</h2>
                    <form>
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
                        <div>
                            <button type='submit'>Add Item</button>
                            <button type='button' onClick={this.handleClickBack}>Back</button>
                        </div>

                    </form>
                </section>
            </>
        )
    }
}

export default AddItem;
