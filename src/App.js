import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;

// App-->Homepage-->Directory-->Menu-Item-->
// |
// -->Shop-Component-->Collection-Preview-->Collection-Item
// |
// -->Header
// |
// -->Sign-in-and-sign-up-->Sign-in-->Form-input
//                       |
//                       -->Sign-up