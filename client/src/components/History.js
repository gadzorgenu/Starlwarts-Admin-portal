import React, {Component} from 'react';
import {connect } from 'react-redux';
import './Dashboard.css' ;
import MainHeader from './MainHeader';

class History extends Component{
    render(){
        return(
            <div>
                <MainHeader/>
                    
            </div>
        )
    }

}
function mapStateToProps({auth}){
    return{auth}
};
export default connect(mapStateToProps)(History);
