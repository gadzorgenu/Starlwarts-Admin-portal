import React, {Component} from 'react';
import {connect } from 'react-redux';
import './Dashboard.css' ;
import MainHeader from './MainHeader';
// import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';

// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';


import TableRow from '@material-ui/core/TableRow';

class Order extends Component{

    constructor(props) {
        super(props);
        this.state = {
            search: "",
            purchases: [],
            productStatus: "",
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

        handleChange(event){
            this.setState({
                productStatus:event.target.value
            });
        }

    render(){
        return(
           <div>
               <MainHeader/>
               <div>
               
                   <div>
                   <h2 className="order">Orders
                       <span className="order_status"> status :</span>
                       
                       {/* <FormControl className="">
                            <Select
                            onChange={this.handleChange.bind(this)}
                            displayEmpty
                            >
                            <MenuItem value="">
                                <em>Choose status</em>
                            </MenuItem>
                            <MenuItem value={purchase.status}>pending</MenuItem>
                            <MenuItem value={purchase.status}>approved</MenuItem>
                            </Select>
                            
                        </FormControl> */}
                   </h2>   
                   <div className="order_table">
                            <TableContainer component={Paper}>
                            <Table className="table" aria-label="caption table">
                                <TableHead>
                                <TableRow>
                                    <TableCell> Date</TableCell>
                                    <TableCell >Customers</TableCell>
                                    <TableCell >Product</TableCell>
                                    <TableCell >Status</TableCell>
                                    
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {this.state.purchases.map((purchase) => (
                                    <TableRow key={purchase.productID}>

                                    <TableCell >{purchase.date}</TableCell>
                                    <TableCell >
                                         <a className ="product_status" href="/customers/customer_info">
                                            {purchase.firstname + "  " + purchase.lastname}
                                        </a>
                                        </TableCell>
                                    <TableCell >{purchase.product_name}</TableCell>
                                    <TableCell >{purchase.product_status}</TableCell>                 
                                    
                                   
                                    </TableRow>
                                 ))}
                                </TableBody>
                            </Table>
                            </TableContainer>
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
export default connect(mapStateToProps)(Order);





