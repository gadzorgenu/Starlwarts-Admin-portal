import React, {Component} from 'react';
import {connect } from 'react-redux';
import './Header.css' ;

class Header extends Component{
    renderContent(){
        switch(this.props.auth){
            case null:
                return;
            case false: 
            return <li><a href="/auth/google">Login with Google</a></li>;
            default: 
            return <li><a> Logout</a></li>
        }
    }
    render(){
        return(
            <nav>
                <div className="nav-wrapper">
                    <a className="left brand-logo">
                        <img className="image" src="../../images/Stalwart-logo-1.png"/>
                    </a>
                    <ul className="right">
                       {this.renderContent()}
                    </ul>
                </div>
            </nav>
        )
    }
}
function mapStateToProps({auth}){
    return{auth}
};
export default connect(mapStateToProps)(Header);