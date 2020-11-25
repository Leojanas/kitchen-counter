import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './navigation.css'

class Navigation extends Component {
    render () {
        return (
            <div>
                <div>
                    <Link className='link' to='/log-in'>Log In</Link>
                    <Link className='link' to='/sign-up'>Sign Up</Link>
                </div>
                <Link className='link' to='/'>Home</Link>
                <Link className='link' to='/inventory'>Inventory</Link>
                <Link className='link' to='/recipes'>Recipes</Link>
                <Link className='link' to='/mealplan'>Meal Plan</Link>
            </div>
        )
    }
}

export default Navigation;