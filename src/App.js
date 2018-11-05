import React from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import Login from './page/Login/Login.jsx'
import 'antd/dist/antd.css'
import LayoutItem from "./component/Layout/layout"
import Home from "./page/home/home"
class App extends React.Component{
  render(){
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login}></Route>
                    <LayoutItem>
                        <Switch>
                            <Route exact path="/home" component={Home}></Route>
                        </Switch>
                    </LayoutItem>
                </Switch>
            </BrowserRouter>
        </div>
    )
  }
}
export default App
