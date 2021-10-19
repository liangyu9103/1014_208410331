import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header_31 from './components/Header_31'
import Homepage_31 from './pages/Homepage_31'
import ShopOverViewPage_31 from './pages/ShopOverViewPage_31'
import ContactPage_31 from './pages/ContactPage_31'
import SignInPage_31 from './pages/SignInPage_31'

import './App_31.scss';


function App_31() {
  return (
    <div>
      <Header_31 />
      <Switch>
      <Route exact path='/' component={Homepage_31} />
      <Route exact path='/shop_31' component={ShopOverViewPage_31} />
      <Route exact path='/contact_31' component={ContactPage_31} />
      <Route exact path='/signin_31' component={SignInPage_31} />
      </Switch>
    </div>
  );
}

export default App_31;

