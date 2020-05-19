import React, {Component} from 'react';
import {connect } from 'react-redux';
import './Dashboard.css' ;
import MainHeader from './MainHeader';
import TextField from '@material-ui/core/TextField';

class Customer_info extends Component{

    constructor(props){
        super(props)

        this.state = {
            customers:[],
          
        };
    }

    componentDidMount() {
        fetch("http://localhost:5000/customers")
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
                    <div className="row">
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