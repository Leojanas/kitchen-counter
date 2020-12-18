import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './navigation.css'

class Navigation extends Component {
    render () {
        return (
            <div className='group'>
                <div className='item'>
                    <Link className='link' to='/'>Home</Link>
                    <Link className='link' to='/inventory'>Inventory</Link>
                    <Link className='link' to='/recipes'>Recipes</Link>
                </div>
                <div className='item'>
                    <Link className='link' to='/mealplan'>Meal Plan</Link>
                    <Link className='link' to='/shopping-list'>Shopping List</Link>
                </div>
            </div>
        )
    }
}

export default Navigation;