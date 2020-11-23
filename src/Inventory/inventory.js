import React, {Component} from 'react';
import InventoryItem from '../InventoryItem/inventory-item';
import Header from '../Header/header';

class Inventory extends Component {

    render (){
        const Items = [
            {name: 'potatoes', qty: 5, unit: 'ea'},
            {name: 'milk', qty: 1, unit: 'gal'}
        ];
        const inventory = Items.map((item, index) => {
            return <InventoryItem item={item} key={index} />
        })
        return (
            <div>
                <Header />
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
                    <button>Add Item</button>
                </section>
            </div>
        )
    }
}

export default Inventory;