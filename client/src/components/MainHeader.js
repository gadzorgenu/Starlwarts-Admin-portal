import React, {Component} from 'react';
import {connect } from 'react-redux';
import './Header.css' ;

class MainHeader extends Component{
    renderContent(){
        switch(this.props.auth){
            case null:
                return;
            case false: 
            return <li><a href="/auth/google">Login with Google</a></li>;
            default: 
            return <li><a href="/api/logout"> Logout</a></li>
        }
    }

    render(){
        return(
            <div>
                  <nav>
                    <div class="nav-wrapper">
                        <a className="left brand-logo">
                            <img className="image" src="../../images/Stalwart-logo-1.png"/>
                        </a>
                    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                    <ul className="right">
                       {this.renderContent()}
                    </ul>
                    <ul class="right hide-on-med-and-down">
                        <li><a href="home.html">Home</a></li>
                        <li><a href="notifications.html">Notifications</a></li>
                        <li><a href="customers.html">Customers</a></li>
                        <li><a href="order.html">Order</a></li>
                        <li><a href="history.html">History</a></li>
                    </ul>
                    
                    </div>                
                </nav>
                <ul class="sidenav" id="mobile-demo">
                    <li><a href="home.html">Home</a></li>
                    <li><a href="notifications.html">Notifications</a></li>
                    <li><a href="customers.html">Customers</a></li>
                    <li><a href="order.html">Order</a></li>
                    <li><a href="history.html">History</a></li>
                </ul>
                
            </div>
        )
    }

}
function mapStateToProps({auth}){
    return{auth}
};
export default connect(mapStateToProps)(MainHeader);




















