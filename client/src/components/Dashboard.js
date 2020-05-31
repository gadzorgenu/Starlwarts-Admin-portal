import React, {Component} from 'react';
import {connect } from 'react-redux';
import './Dashboard.css' ;
import MainHeader from './MainHeader';
import BarChart from './Bar';
import LineGraph from './Line';
import PieChart from './Pie'
class Dashboard extends Component{
    constructor(props){
        super(props);
       this.state = {
            purchases: [],
            purchaseInfo:[],
            page:1,
            startResults:0,
            endResults:0,
        }

    }

     //set the current page info
     getPageResults(){
        //get current page, start and end index
        let page = this.state.page;
        let startIndex = (page -1) * 10;
        let endIndex = startIndex + 3; 
  
        //use the length of the array if length is smaller than the endIndex
        endIndex = (this.state.purchases.length <= endIndex )? this.state.purchases.length : endIndex;
  
        //update page results to be retrieved
        this.setState({startIndex:startIndex+1});
        this.setState({endIndex:endIndex});
  
        //shallow copy array fields to new variable
        let purchaseInfo = this.state.purchases.slice(startIndex,endIndex);
  
        //current page info
        this.setState({purchaseInfo:purchaseInfo});
      }


    componentDidMount() {
        fetch("http://localhost:5000/orders")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                purchases: result.data
              });
              this.getPageResults();
            },
          )
        }

    render(){
        return(
            <div>
                <MainHeader/>
                <div className="card-cont customer_order" > 
                    <div className="row ">
                        <div className="col m4 one_ ">
                            <div className="card one" >
                                <a href="/customers">
                                    <div className="card-content users">
                                        <div className="row">

                                        <div className="col m3 icon">                                     
                                            <i className="material-icons con "> account_circle</i>
                                        </div>
                                       <div className="col m10 cus_del">
                                            <h1 className="total_cus">Customers</h1>
                                            <p className="cus_">500</p>
                                            <p className="cus">-15% Decreased</p>
                                       </div>
                                        </div>
                                        
                                    </div>
                                </a> 
                            </div>
                        </div>
                        <div className="col m4 one_">
                            <div className="card one one1">
                                <a href="/orders">
                                    <div className="card-content">
                                    <div className="row">
                                        <div className="col m3 assessment">                                     
                                            <i className="material-icons con">assessment </i>
                                        </div>
                                        <div className="col m10 cus_del">
                                            <h1 className="total_orders">Orders</h1>
                                            <p className="ord_">750</p>
                                            <p className="cus">+10% Increased</p>
                                        </div>
                                      
                                    </div>

                                    </div>
                                </a> 
                            </div>
                        </div>
                        <div className="col m4 one_ ">
                            <div className="card one" >
                                <a href="/customers">
                                    <div className="card-content">
                                        <div className="row">
                                            <div className="col m3 money">                                     
                                                <i className="material-icons con">monetization_on </i>
                                            </div>
                                            <div className="col m10 cus_del" >
                                                <h1 className="total_cust">Debts</h1>
                                                <p className="cus_1">$45,234</p>
                                                <p className="cus">+10% Decreased</p>
                                       </div>

                                        </div>
                                       
                                    </div>
                                </a> 
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="card-holder" >       
                    <div className="row">
                        <div className="col m6">
                        <a href="/orders"> 
                            <PieChart/>
                            </a>
                        </div>
                        <div className="col m5 ">
                            <div className=" chart_" >
                                <a href="/orders">                                   
                                    <BarChart legendPosition= "bottom"/>
                                </a> 
                            </div>
                        </div>                     
                    </div> 
                </div> 
                <div className="card-holder" >       
                <div className="row">              
                    <div className="col m6">
                        <a href="/customers"> 
                            <LineGraph/>
                        </a>
                    </div>
                    <div className="col m5">                       
                        <div className="card pending_orders" >
                                <a href="/orders">                                            
                                    <div className="card-content">
                                    <h1 className="pendingOrders">Pending orders</h1>
                                    {this.state.purchaseInfo.map((purchase) => (
                                        <div className=" objects" key={purchase._id}>                                
                                            <p className="date">{purchase.date}
                                                <span className="time"> {purchase.time}</span>
                                            </p>
                                            <p className="customer_name_">
                                                <span className="name"> by  &nbsp;
                                                {purchase.firstname + "  " + purchase.lastname}
                                                </span> 
                                                <span className="quantiy" > {purchase.quantity} items</span>
                                                <span className="price"> 
                                                    <div className="prod_price">
                                                        {purchase.price}
                                                    </div>
                                               </span>
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

