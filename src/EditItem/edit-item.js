import React, {Component} from 'react';
import Items from '../items';
import Header from '../Header/header';

class EditItem extends Component {
    handleClickBack = () => {
        this.props.history.push(`/inventory/${this.props.match.params.id}`)
    }
    handleChangeQuantity = () => {

    }
    render() {
        const item = Items.filter(i => {
            return i.id === Number(this.props.match.params.id)
        })[0]
        return (
            <div>
                <Header />
                <h2>Edit Item</h2>
                <form>
                    <h3>{item.name}</h3>
                    <label htmlFor='qty'>Quantity: </label>
                    <input id='qty' name='qty' value={item.qty} onChange={this.handleChangeQuantity}/>
                    <label htmlFor='qty'>{item.unit}</label>
                    <div>
                        <button onClick={this.handleClickBack}>Back</button>
                        <button type='submit'>Save</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default EditItem;