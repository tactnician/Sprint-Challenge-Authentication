import React from 'react';
import axios from 'axios';

import requiresAuth from '../../auth/requiresAuth';

class Jokes extends React.Component {
    state = {
        jokes: []
    };

    componentDidMount() {
        axios
        .get('/jokes')
        .then(res => {
            this.setState({
            jokes: res.data
            })
            console.log(this.state);
        })
    }

    render() {
        return(
        <div>
            <h2>Dad Jokes</h2>
            <ul>
            {this.state.jokes.map(j => {
            return  <li key={j.id}>{j.joke}</li>
            })}
            </ul>
        </div>
        )
    }
}

export default requiresAuth(Jokes);