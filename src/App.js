import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';
import Header from "./components/header/Header";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import SignInAndSignUp from "./pages/signInAndSignUp/signInAndSignUp";
import { auth, createUserProfileDocument } from "./firebase/firebaseUtils";
import { setCurrentUser } from './redux/user/userAction';
import "./App.css";

class App extends Component {

  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        const userRef = await createUserProfileDocument(authUser);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({ 
              id: snapShot.id,
              ...snapShot.data()
          }); 
        })
      }
      else {
        setCurrentUser( authUser )
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signin" component={SignInAndSignUp} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>( { 
  setCurrentUser: (user) =>  dispatch(setCurrentUser(user))
})
export default connect(null, mapDispatchToProps) (App);
