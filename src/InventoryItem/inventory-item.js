import React, {Component} from 'react';

class InventoryItem extends Component {
    render () {
        return (
            <tr>
                <td>{this.props.item.name}</td>
                <td>{this.props.item.qty}</td>
                <td>{this.props.item.unit}</td>
                <td><button>Edit</button></td>
                <td><button>Remove</button></td>
            </tr>
        )
    }
}

export default InventoryItem;