import React from 'react';
import axios from 'axios';
import { apiUri } from '../components/Login/endpoint';

axios.defaults.baseURL = `${apiUri}/api`;

axios.interceptors.request.use(
    function(options) {
        options.headers.authorization = localStorage.getItem('jwt')
        return options;
    },
    function(error) {
        return Promise.reject(error);
    }
)

export default function(Component) {
    return class Authenticated extends React.Component {
        render() {
        const token = localStorage.getItem('jwt');
        const notLoggedIn = <h3>Please login to see the jokes</h3>
        return(
        <div>
            {token ? 
                <Component {...this.props}/> :
                notLoggedIn
            }
        </div>
        )
        }
    }
}
