import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import './App.css';
import Jokes from './components/Jokes/Jokes';
import Login from './components/Login/Login';

class App extends Component {

  logout = () => {
    localStorage.removeItem('jwt');
    this.props.history.push('/login');
  }

  render() {
    return (
      <div className='App'>
        <header>
          <NavLink to="/login">Login</NavLink>
          &nbsp;|&nbsp;
          <NavLink to="/jokes">Jokes</NavLink>
        
            <button onClick={this.logout}>Logout</button> 
        </header>
        <Route path='/login' component={Login}/>
        <Route path='/jokes' component={Jokes}/>
      </div>
    );
  }
}

export default withRouter(App);
