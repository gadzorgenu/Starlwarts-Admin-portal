import React, {Component} from 'react';
import {connect } from 'react-redux';
import './Dashboard.css' ;
import LoginHeader from './LoginHeader';

class LandingPage extends Component{
    render(){
        return(
            <div>
                <LoginHeader/>
                
            </div>
        )
    }

}
function mapStateToProps({auth}){
    return{auth}
};
export default connect(mapStateToProps)(LandingPage);