import React, {Component} from 'react';
import {connect } from 'react-redux';
import './Dashboard.css' ;
import MainHeader from './MainHeader';


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
        let endIndex = startIndex + 10; 
  
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

