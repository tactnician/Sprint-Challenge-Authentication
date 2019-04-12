import React from 'react';
import axios from 'axios';
import { apiUri } from './endpoint';

class Login extends React.Component {
    state = {
        username: '',
        password: ''
    };

    handleInputChange = event => {
        const {name, value} = event.target;
        
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        const endpoint = `${apiUri}/api/login`;
        // const endpoint = 'http://localhost:5000/api/login'
        axios
        .post(endpoint, this.state)
        .then(res => {
            localStorage.setItem('jwt', res.data.token) 
        })
        .catch(error => console.error(error))
    }


    render(){
        return (
        <div>
            <h2>Login</h2>
            <form onSubmit={this.handleSubmit}>
            <div>
                <label htmlFor="username"/>
                <input 
                name="username"
                id="username"
                value={this.state.username}
                type='text'
                onChange={this.handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="password"/>
                <input 
                name="password"
                id="password"
                value={this.state.password}
                type='text'
                onChange={this.handleInputChange}
                />
            </div>
            <div>
                <button type='submit'>Login</button>
            </div>
            </form>
        </div>
        )
    }
}

export default Login;