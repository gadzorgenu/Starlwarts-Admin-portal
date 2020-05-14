import React, {Component} from 'react';
import {connect } from 'react-redux';
import './Header.css' ;

class Header extends Component{
   
    render(){
        return(
            <div className="navbar-fixed">
            <nav className ="landing" >
                <div className="nav-wrapper">
                    <a className="left brand-logo">
                        <img className="image" src="../../images/Stalwart-logo-1.png"/>
                    </a>                  
                </div>
            </nav>
             
            </div>
        )
    }
}
function mapStateToProps({auth}){
    return{auth}
};
export default connect(mapStateToProps)(Header);