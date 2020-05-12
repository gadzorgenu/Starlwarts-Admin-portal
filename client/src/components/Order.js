import React, {Component} from 'react';
import {connect } from 'react-redux';
import './Dashboard.css' ;
import MainHeader from './MainHeader';

class Order extends Component{
    render(){
        return(
           <div>
               <MainHeader/>
               <div>
                   <h2 className="order">Orders
                       <span className="order_status"> status :</span>
                   </h2>   
                   <div >
                        <span className=""> Date </span>
                        <span> Customers </span>
                        <span> Product </span>
                        <span> Status </span>
                   </div>
               </div>
           </div>
         )
    }
}
function mapStateToProps({auth}){
    return{auth}
};
export default connect(mapStateToProps)(Order);