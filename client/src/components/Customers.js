import React, {Component} from 'react';
import {connect } from 'react-redux';
import './Header.css' ;
import MainHeader from './MainHeader';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';

import TableRow from '@material-ui/core/TableRow';


class Customers extends Component{

    constructor(props){
        super(props)

        this.state = {
            customers:[],
            currentCustomersInfo:[],
            page:1,
            startResults:0,
            endResults:0,
          
        };

        // this.handleChangePage = this.handleChangePage.bind(this);
        // this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
    }

    //get the next page items
    getNextPageItems(){
      if(this.state.page * 10 < this.state.customers.length ){

        //update page state
        this.setState({page:this.state.page +1},()=>{
          //get page results after updating page state
          this.getPageResults();  
        });
      }
    }

    //get the previous page items
    getPreviousPageItems(){
      if(this.state.page > 1){

        //update page state
        this.setState({page:this.state.page -1},()=>{
          //get page results after updating page state
          this.getPageResults();  
        });
      }
    }

    //set the current page info
    getPageResults(){
      //get current page, start and end page for array copy
      let page = this.state.page;
      let startIndex = (page -1) * 10;
      let endIndex = startIndex + 10; 

      //use the length of the array if length is smaller than the endIndex
      endIndex = (this.state.customers.length <= endIndex )? this.state.customers.length : endIndex;

      //update page results to be retrieved
      this.setState({startIndex:startIndex+1});
      this.setState({endIndex:endIndex});

      //shallow copy array fields to new variable
      let currentPageInfo = this.state.customers.slice(startIndex,endIndex);

      // console.log(`FUll page results =>${this.state.customers.length}`);
      // console.log(`Current Page=> ${page}, start index=> ${startIndex} , end Index =>${endIndex}`);

      //update current page info
      this.setState({currentCustomersInfo:currentPageInfo});
    }
    
    
    componentDidMount() {
        fetch("http://localhost:5000/customers")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                customers: result.data
              });

              this.getPageResults();
            },
          )
        }
       
    render(){
        
        return(
           <div>
               <MainHeader/>
                <h1 className="customer_Header">Customers</h1>
                <div className="customer_table">               
                  <button className="arrows" onClick={this.getNextPageItems.bind(this)}>
                      <i className="material-icons ">chevron_right</i>
                    </button>
                  <button className="arrows" onClick={this.getPreviousPageItems.bind(this)}>
                      <i className="material-icons">chevron_left</i>                
                  </button>              
                  <span className="page">Page {this.state.page} Results {this.state.startIndex} - {this.state.endIndex} </span>
                    <TableContainer component={Paper}>
                    <Table className="table" aria-label="caption table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Customers</TableCell>
                            <TableCell >Last purchase</TableCell>
                            <TableCell align="right">Balance</TableCell>
                            <TableCell align="right">Segment</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {this.state.currentCustomersInfo.map((customer) => (
                            <TableRow key={customer._id}>
                            <TableCell component="th" scope="row">
                                <a className ="product_status" href="/customers/customer_info">{customer.firstname + "  " + customer.lastname}</a>
                            </TableCell>
                            <TableCell >{customer.date}</TableCell>
                            <TableCell align="right">{customer.balance}</TableCell>
                            <TableCell align="right">{customer.segment}</TableCell>
                            
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </TableContainer>
                  
           </div>
           </div>
         )
    }
}
function mapStateToProps({auth}){
    return{auth}
};
export default connect(mapStateToProps)(Customers);