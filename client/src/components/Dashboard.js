import React, {Component} from 'react';
import {connect } from 'react-redux';
import './Dashboard.css' ;
import MainHeader from './MainHeader';


class Dashboard extends Component{
    constructor(props){
        super(props);
       this.state = {
            purchases: []
        }

    }

    componentDidMount() {
        fetch("http://localhost:5000/orders")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                purchases: result.data
              });
            },
          )
        }

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
                    <div className="col m10">
                        <div className="card pending_orders" >
                            <a href="/orders">                                            
                                <div className="card-content">
                                <h1 className="pendingOrders">Pending orders</h1>
                                { this. state.purchases.map(purchase =>( 
                                    <div className=" objects" >                                
                                        <p className="date">{purchase.date}
                                            <span className="time"> {purchase.time}</span>
                                        </p>
                                        <p className="customer_name_">
                                            <span className="name"> by  &nbsp;
                                            {purchase.firstname + "  " + purchase.lastname}
                                            </span> 
                                            <span className="quantiy" > {purchase.quantity} items</span>
                                            <span className="price"> {purchase.price}</span>
                                        </p>
                                    </div>
                                ))}
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

