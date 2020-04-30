import React, {Component} from 'react';
import {connect } from 'react-redux';
import './Header.css' ;
import MainHeader from './MainHeader';

class Notification extends Component{
    render(){
        return(
            <div>
                <MainHeader/>
                <div>
                    <h2 className="header">Notifications</h2>
                    <div className="buttons">
                        <a class="waves-effect waves-light btn">Send Message</a>
                        <a class="waves-effect waves-light btn">Send Email</a>
                    </div>
                    <div className="card-cont" >       
                        <div className="row">
                            <div className="col m10">
                                <div className="card products" >                                                                               
                                    <div className="card-content">
                                        <h1 className="product_name"> SAMSUNG A30, SPLIT - INVERTER AC 
                                             <span className="total_price">Total Price</span>
                                        </h1>
                                        <div className="product_info">
                                            <span><a className ="product_status" href="/order">pending</a></span>
                                            <span className="date"> 23/01/2020</span>
                                            <span className="time">16:20:24 pm</span>
                                            <span className="price">GHc4,5000</span> 
                                        </div>                                                                                             
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div> 
                </div>             
            </div>
        )
    }

}
function mapStateToProps({auth}){
    return{auth}
};
export default connect(mapStateToProps)(Notification);

