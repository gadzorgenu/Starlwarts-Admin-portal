import React, {Component} from 'react';
import {connect } from 'react-redux';
import './Header.css' ;
import MainHeader from './MainHeader';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';


class History extends Component{

    constructor(props) {
        super(props);
        this.state = {
            search: "",
            purchases: []
        }     

        this.handleSearch = this.handleSearch.bind(this);
        this.updateInput = this.updateInput.bind(this);
        
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


        
    updateInput(event) {
        this.setState({
            search: event.target.value
        });
    }

    handleSearch() {
        fetch("http://localhost:5000/purchases/" + this.state.search)
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
                <div className="history_cont">            
                <div className="row">
                    <form className="col s12">   
                        <h3 className="history">History</h3>                  
                        <div className="input-field col s4">                      
                            <i className="material-icons prefix">search </i>
                            <input onChange={this.updateInput}  id="icon_prefix" type="text" className="validate" placeholder="Search"></input>                          
                            <div className="buttons" onClick={this.handleSearch}>
                                <a className="waves-effect waves-light btn second">search</a>
                            </div>
                        </div>
                     </form>
                </div>
                <h2 className="filter_order">Filter orders by :</h2>             
                <div className="row">
                    <label> Show:  </label>
                    <div className="input-field col s12 sort">                                         
                        <select>
                            <option value="" disabled selected>Choose your option</option>
                            <option value="1">Most recent</option>
                            <option value="1">last month</option>
                            <option value="2">Earlier this year</option>
                            <option value="3">Last year</option>
                        </select>                                        
                    </div> 
                    </div>
                    <div className="order_table">
                    <TableContainer component={Paper}>
                    <Table className="table" aria-label="caption table">
                        <TableHead>
                        <TableRow>
                            <TableCell> Products</TableCell>
                            <TableCell >Status</TableCell>
                            <TableCell >Price</TableCell>
                            <TableCell >Date</TableCell>
                            <TableCell >Time</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {this.state.purchases.map((purchase) => (
                            <TableRow key={purchase.productID}>

                            <TableCell >{purchase.product_name}</TableCell>
                            <TableCell >{ purchase.product_status}</TableCell>
                            <TableCell >{purchase.price}</TableCell>
                            <TableCell >{purchase.date}</TableCell>                 
                            <TableCell >{purchase.time}</TableCell>
                            
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </TableContainer>
                    </div>
               </div>
            </div> 
        )
    }

}
function mapStateToProps({auth}){
    return{auth}
};
export default connect(mapStateToProps)(History);

