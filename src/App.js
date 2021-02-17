import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from "./pages/homepage/HomePage"; 
import ShopPage from './pages/shop/ShopPage'; 
import signInAndSignUp from './pages/signInAndSignUp/signInAndSignUp';
import { auth } from './firebase/firebaseUtils';

import "./App.css"; 
  class App extends Component { state = {
      currentUser: null
    } 

    unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
     // console.log(user)
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
      <Header currentUser={this.state.currentUser} />
      <Switch>
      <Route exact path='/' component={HomePage} /> 
      <Route exact path='/signin' component={signInAndSignUp} /> 
      <Route  path='/shop' component={ShopPage} /> 
      </Switch>  
      </div>
    ); 
  
  }
}
export default App;