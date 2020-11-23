import React, {Component} from 'react';
import Header from '../Header/header';

class LogIn extends Component {
    render () {
        return (
            <div>
                <Header />
                <form>
                    <h3>Log In</h3>
                    <label htmlFor='username'>Username: </label>
                    <input id='username' />
                    <label htmlFor='password'>Password: </label>
                    <input id='password' />
                    <button type='submit'>Log In</button>
                </form>
            </div>
        )
    }
}

export default LogIn; 