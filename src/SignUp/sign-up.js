import React, {Component} from 'react';
import Header from '../Header/header';

class SignUp extends Component {
    render () {
        return (
            <div>
                <Header />
                <form>
                    <h3>Sign Up</h3>
                    <label htmlFor='first-name'>First Name: </label>
                    <input id='first-name' />                    
                    <label htmlFor='last-name'>Last Name: </label>
                    <input id='last-name' />
                    <br />
                    <label htmlFor='username'>Username: </label>
                    <input id='username' />
                    <br />
                    <label htmlFor='password'>Password: </label>
                    <input id='password' />
                    <br />
                    <label htmlFor='repeat-password'>Repeat Password: </label>
                    <input id='repeat-password' />
                    <button type='submit'>Sign Up</button>
                </form>
            </div>
        )
    }
}

export default SignUp;