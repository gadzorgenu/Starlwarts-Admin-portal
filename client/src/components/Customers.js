import React, {Component} from 'react';
import {connect } from 'react-redux';
import './Dashboard.css' ;
import MainHeader from './MainHeader';

class Customers extends Component{
    render(){
        return(
           <div>
               <MainHeader/>
               <div>
                   <h2 className="header"> Customer List</h2>
                   <h2 className="cus_header">
                       <span className="customer_name"> Customer</span>
                       <span className="quantity">Qty</span>
                       <span className="Balance">Balance</span>
                       <span className="latest_purchase">Last Purchase</span>
                       <span className="segments">Segments</span>
                   </h2>
               </div>
           </div>
         )
    }
}
function mapStateToProps({auth}){
    return{auth}
};
export default connect(mapStateToProps)(Customers);