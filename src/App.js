import React, { Component } from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import Login from './page/Login/Login.jsx'
class App extends React.Component{
  render(){
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
export default App
