import React, {Component} from 'react';
import {connect } from 'react-redux';
import './Dashboard.css' ;
import MainHeader from './MainHeader';
import TextField from '@material-ui/core/TextField';

class Customer_info extends Component{

    constructor(props){
        super(props)

        this.state = {
            customerID: props.match.params ? props.match.params.id : "",
            customers:[],
          
        };
    }

    componentDidMount() {
        //retrieve specific user information
        fetch("http://localhost:5000/customers?id="+this.state.customerID)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                customers: result.data
              });

          
            },
          )
        }


    render(){
        return(
           <div className="customer_information">
               <MainHeader/>
               {this.state.customers.map((customer) => (
                <div className="cus_info" > 
                    <div className="row customerName">
                        <div className="col m5 ">              
                                <TextField
                                    className="firstname"
                                    id="standard-read-only-input"
                                    label="Firstname"
                                    defaultValue={customer.firstname}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    />
                            </div>
                        
                        <div className="col m5">             
                            <TextField
                                    className="firstname"
                                    id="standard-read-only-input"
                                    label="Lastname"
                                    defaultValue={customer.lastname}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    />
                        </div>
                    </div> 
                    <div className="row email">
                        <div className="col m5">                      
                                <TextField
                                    className="firstname"
                                    id="standard-read-only-input"
                                    label="Email"
                                    defaultValue={customer.email}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    />
                            </div>
                        
                        <div className="col m5">                                    
                            <TextField
                                    className="firstname"
                                    id="standard-read-only-input"
                                    label="Phone number"
                                    defaultValue={customer.phone} 
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    />
                        </div>
                    </div> 
                    <div className="row address">
                        <div className="col m5">              
                                <TextField
                                    className="firstname"
                                    id="standard-read-only-input"
                                    label="Address"
                                    defaultValue={customer.address} 
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    />
                        </div>                                           
                    </div>                    
                </div>    
               ))}
           </div>
         )
    }
}
function mapStateToProps({auth}){
    return{auth}
};
export default connect(mapStateToProps)(Customer_info);