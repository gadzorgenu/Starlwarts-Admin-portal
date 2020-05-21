import React, {Component} from 'react';
import {connect } from 'react-redux';
import M from  'materialize-css/dist/js/materialize.min.js';
import './Header.css' ;

class MainHeader extends Component{
    
    componentDidMount() {
        let sidenav = document.querySelector('#slide-out');
        M.Sidenav.init(sidenav, {});
      }      
    
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
                      
                    <div className="container">
                    <a href="/." data-target="slide-out" className="sidenav-trigger show-on-large"><i className="material-icons">menu</i></a>
                        <a  href= "/." className="left brand-logo">
                            <img className="image" alt="some " src="../../images/Stalwart-logo-1.png"/>                     
                        </a>               
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="/home">Home</a></li>
                        <li><a href="/notifications">Notifications</a></li>
                        <li><a href="/customers">Customers</a></li>
                        <li><a href="/orders">Orders</a></li>
                        <li><a href="/history">History</a></li>
                        <li><a href="/api/logout">
                           {this.renderContent()}
                         </a></li>
                    </ul>
                    
                    </div>                
                </nav>
                    <ul id="slide-out" className="sidenav">
                        <li>
                            <a href="/home">
                                <i className="material-icons">home</i>Home
                            </a></li>
                        <li><a href="/notifications">
                                <i className="material-icons">notifications</i>Notifications
                            </a></li>
                        <li><a href="/customers">
                                <i className="material-icons">person</i>Customers
                            </a></li>
                        <li><a href="/orders">
                                 <i className="material-icons">assignment</i>Orders
                            </a></li>
                        <li><a href="/history">
                                <i className="material-icons">history</i>History
                            </a></li>
                        <li><a href="/api/logout">
                            <i className="material-icons"> account_circle</i>{this.renderContent()}
                         </a></li>
                    </ul>
            </div>
        )
    }

}
function mapStateToProps({auth}){
    return{auth}
};
export default connect(mapStateToProps)(MainHeader);




















