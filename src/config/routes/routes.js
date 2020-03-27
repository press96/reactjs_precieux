import React from 'react'
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom'
import Header from '../../components/header/header'
import Form from '../../components/form/index'
import Panier from '../../components/panier/panier'
// import Parfum from '../../components/parfum/parfum'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Form}></Route>
        <Route exact path='/panier' component={Panier}></Route>
        {/* <Route exact path='/parfum' component={Parfum}></Route> */}
        <Redirect to='/'/>
      </Switch>
    </Router>
  )
}

export default Routes