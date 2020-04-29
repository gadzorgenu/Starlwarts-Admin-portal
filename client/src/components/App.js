import React,{Component}from 'react';
import {BrowserRouter, Route } from 'react-router-dom';  
//connect function to give certain components to call action creators
import {connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
const Dashboard = () => <h2>Dashboard</h2>
const Landing  = () => <h2>Landing</h2>
const Notifications = () => <h2>Notifications</h2>
const Customers = () => <h2>Customers</h2>
const customerInfo = () => <h2>customerInfo</h2>
const Orders = () => <h2>Orders</h2>
const History = () => <h2>History</h2>

class App extends Component{
    componentDidMount(){
        this.props.fetchUser();
    }
    render(){
        return(
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/" component ={Landing}/>
                        <Route exact path="/home" component={Dashboard}/>
                        <Route path="/home/notification" component={Notifications}/>
                        <Route exact path="/home/customers" component={Customers}/>
                        <Route path="/home/customers/customer_info" component={customerInfo}/>
                        <Route path="/orders" component={Orders}/>
                        <Route path="/history" component={History}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}
export default connect(null, actions)(App);


