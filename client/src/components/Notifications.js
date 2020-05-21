import React, {Component} from 'react';
import {connect } from 'react-redux';
import './Header.css' ;
import MainHeader from './MainHeader';

class Notification extends Component{

    constructor(props) {
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
                <div className="notif_container">
                    <div className="header_cont">
                    <h2 className="header">Notifications</h2>
                        <div className="buttons">
                            <a href="/.." class="waves-effect waves-light btn ">Send Message</a>
                            <a href="/.." class="waves-effect waves-light btn second">Send Email</a>
                        </div>
                    </div>
                    <div className="card-cont" >       
                        <div className="row">
                            { this.state.purchases.map(purchase =>(
                            <div className="col m11">
                                <div className="card products" >                                                                               
                                    <div className="card-content">
                                        <h1 className="product_name">{purchase.product_name}
                                            <span className="total_price">Total price </span>
                                        </h1>
                                        <div className="product_info">
                                            <span><a className ="product_status" href="/order">{purchase.product_status}</a></span>
                                            <span className="date"> { purchase.date}</span>
                                            <span className="time">{purchase.time}</span>
                                            <span className="price"> {purchase.price}</span> 
                                        </div>                                                                                             
                                    </div>
                                </div>
                            </div>
                            ))}
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

