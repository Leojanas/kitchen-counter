import React, {Component} from 'react';
import InventoryItem from '../InventoryItem/inventory-item';

class Inventory extends Component {
    static defaultProps = {
        items: []
    }
    handleAddItem = () => {
        this.props.history.push('/inventory-add')
    }
    render (){
        let inventory;
        if(this.props.items.length !== 0){
            inventory = this.props.items.map((item, index) => {
                return <InventoryItem 
                    item={item} 
                    key={index}
                    use='inventory' 
                    handleUpdateInventory={this.props.handleUpdateInventory}
                />
            })
        }

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
                    <div className='center-div small-group'>
                    <button type='button' onClick={this.handleAddItem}>Add Item</button>
                    </div>

                </section>
        )
    }
}

export default Inventory;