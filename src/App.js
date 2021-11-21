import React from 'react';
import './App.css';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App(){
    return (
      <div className="App">
        <Router>
          <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/cart" component={Cart} />

        </Switch>
        </Router>
      </div>
    ); 
}


export default App;