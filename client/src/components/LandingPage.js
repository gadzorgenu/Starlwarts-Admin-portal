import React, {Component} from 'react';
import {connect } from 'react-redux';
import './Dashboard.css' ;
import LoginHeader from './LoginHeader';

class LandingPage extends Component{
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
                <LoginHeader/>
                <div className="home_container">
                    <h1 className="login_header">Login with Google Account</h1>
                    <p className="welcome">Welcome! Please click on the button below to Sign-in to </p>
                    <p className="account">Stalwarts with your Google Account.</p>
                    <button className="btn sign_login">
                        {/*                                                                    
                        <img className ="google" src="../../images/google_icon.jpg"/> */}
                        <span >{this.renderContent()}</span>
                     </button>
                </div>
            </div>
        )
    }

}
function mapStateToProps({auth}){
    return{auth}
};
export default connect(mapStateToProps)(LandingPage);