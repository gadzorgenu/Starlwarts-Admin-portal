import React, {Component} from 'react';
import {connect } from 'react-redux';
import './Dashboard.css' ;
import MainHeader from './MainHeader';


class Dashboard extends Component{
    render(){
        return(
            <div>
                <MainHeader/>
                <div className="card-cont" > 
                    <div className="row">
                        <div className="col m5">
                            <div className="card one" >
                                <a href="/customers">
                                     <div className="card-content">
                                        <h1 className="total_cus">Total customers</h1>
                                        <p>300</p>
                                    </div>
                                </a> 
                            </div>
                        </div>
                        <div className="col m5">
                            <div className="card two">
                                <a href="/orders">
                                    <div className="card-content">
                                        <h1 className="total_orders">Total Orders</h1>
                                        <p>300</p>
                                    </div>
                                </a> 
                            </div>
                        </div>
                    </div> 
                </div> 
                <div className="card-holder" >       
                <div className="row">
                    <div className="col m9">
                        <div className="card pending_orders" >
                            <a href="/orders">                                            
                                <div className="card-content">
                                    <h1 className="pendingOrders">Pending orders</h1>
                                     <p className="date">20 /03/ 2020,
                                        <span className="time"> 16:14:45</span>
                                    </p>
                                    <p className="customer_name">by Mercy Dav, 
                                        <span className="quantiy" > 3 items</span>
                                        <span className="price"> Ghc 2,7000</span>
                                    </p>
                                </div>
                                <div className="card-content">
                                     <p className="date">20 /03/ 2020,
                                        <span className="time"> 16:14:45</span>
                                    </p>
                                    <p className="customer_name">by Mercy Dav, 
                                        <span className="quantiy" > 3 items</span>
                                        <span className="price"> Ghc 2,7000</span>
                                    </p>
                                </div>
                                <div className="card-content">
                                     <p className="date">20 /03/ 2020,
                                        <span className="time"> 16:14:45</span>
                                    </p>
                                    <p className="customer_name">by Mercy Dav, 
                                        <span className="quantiy" > 3 items</span>
                                        <span className="price"> Ghc 2,7000</span>
                                    </p>
                                </div>
                                <div className="card-content">
                                     <p className="date">20 /03/ 2020,
                                        <span className="time"> 16:14:45</span>
                                    </p>
                                    <p className="customer_name">by Mercy Dav, 
                                        <span className="quantiy" > 3 items</span>
                                        <span className="price"> Ghc 2,7000</span>
                                    </p>
                                </div>
                                <div className="card-content">
                                     <p className="date">20 /03/ 2020,
                                        <span className="time"> 16:14:45</span>
                                    </p>
                                    <p className="customer_name">by Mercy Dav, 
                                        <span className="quantiy" > 3 items</span>
                                        <span className="price"> Ghc 2,7000</span>
                                    </p>
                                </div>
                                <div className="card-content">
                                     <p className="date">20 /03/ 2020,
                                        <span className="time"> 16:14:45</span>
                                    </p>
                                    <p className="customer_name">by Mercy Dav, 
                                        <span className="quantiy" > 3 items</span>
                                        <span className="price"> Ghc 2,7000</span>
                                    </p>
                                </div>
                            </a> 
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
export default connect(mapStateToProps)(Dashboard);

