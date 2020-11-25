import React, {Component} from 'react';
import InventoryItem from '../InventoryItem/inventory-item';

class Inventory extends Component {
    handleAddItem = () => {
        this.props.history.push('/inventory-add')
    }
    render (){
        const inventory = this.props.items.map((item, index) => {
            return <InventoryItem item={item} key={index} handleDeleteItem={this.props.handleDeleteItem}/>
        })
        return (
                <section>
                    <h2>My Inventory</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Qty</th>
                                <th>Unit</th>
                            </tr>
                        </thead>
                        <tbody>
                        {inventory}      
                        </tbody>
                    </table>
                    <button type='button' onClick={this.handleAddItem}>Add Item</button>
                </section>
        )
    }
}

export default Inventory;