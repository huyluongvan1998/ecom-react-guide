import React from 'react';

import './App.css';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import Header from './component/header/header';
import ShopPage from './pages/shopPage/Shop';
import SignUpPage from './pages/sign-in-sign-up-page/signup/sign-up-page';
import { auth } from './component/firebase/firebase';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    } )
  }

render() {
  return (
    <div className="App">
      <Header />
        <Switch>
          
            <Route exact path='/' component={ Homepage } />
            <Route exact path='/shop' component={ ShopPage } />
            <Route exact path='/sign-up' component={ SignUpPage } />
        </Switch>
    </div>
  );
}
}

export default App;
