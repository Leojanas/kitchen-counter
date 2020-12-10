import React, {Component} from 'react';
import InventoryItem from '../InventoryItem/inventory-item';
import config from '../config';

class ShoppingList extends Component {
handleClearShoppingList = () => {
    fetch(config.API_ENDPOINT + '/api/shopping-list', {
        method: 'DELETE'
    })
    .then(res => {
        if(!res.ok){
            console.log(res)
        }
        this.props.handleUpdateShoppingList();
    })
}
handleUseShoppingList = () => {
    let items = this.props.shoppingList;
fetch(config.API_ENDPOINT + '/api/inventory', {
    method: 'POST',
    headers: {
        'Content-Type':'application/json'
    },
    body: JSON.stringify(items)
})
.then(res => {
    if(!res.ok){
        console.log(res)
    }
    this.handleClearShoppingList();
    this.props.handleUpdateInventory();
    this.props.history.push('/inventory')
})
}
render() {
    const items = this.props.shoppingList.map((item, index) => {
        return <InventoryItem 
            key={index}
            item={item}
            use='shoppingList'
        />
    })
    return (
        <section>
            <h2>My Shopping List</h2>
            <h3>Items</h3>
            <table>
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Quantity</th>
                        <th>Unit</th>
                    </tr>
                </thead>
                <tbody>
                    {items}
                </tbody>
            </table>
            <div>
                <button type='button' onClick={this.handleClearShoppingList}>Clear Shopping List</button>
                <button type='button' onClick={this.handleUseShoppingList}>Use Shopping List (Add to Inventory)</button>
            </div>
        </section>
    )
}
}

export default ShoppingList;