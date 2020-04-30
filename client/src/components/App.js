import React,{Component}from 'react';
import {BrowserRouter, Route } from 'react-router-dom';  
//connect function to give certain components to call action creators
import {connect } from 'react-redux';
import * as actions from '../actions';

import  Dashboard from './Dashboard';
import LandingPage from './LandingPage';
import Notification from './Notifications';
import Order from './Order';
import History from './History';
import Customers from './Customers';
import Customer_info from './Customer_info';

class App extends Component{
    componentDidMount(){
        this.props.fetchUser();
    }
    render(){
        return(
            <div className="container">
                <BrowserRouter>
                    <div>
                        
                        <Route exact path="/" component ={LandingPage}/>
                        <Route path="/home" component={Dashboard}/>
                        <Route path="/notifications" component={Notification}/>
                        <Route exact path="/customers" component={Customers}/>
                        <Route path="/customers/customer_info" component={Customer_info}/>
                        <Route path="/orders" component={Order}/>
                        <Route path="/history" component={History}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}
export default connect(null, actions)(App);


