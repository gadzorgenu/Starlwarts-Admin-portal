import React, {Component} from 'react';
import {connect } from 'react-redux';
import './Dashboard.css' ;
import MainHeader from './MainHeader';

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

            //   this.getPageResults();
            },
          )
        }


    render(){
        return(
           <div>
               <MainHeader/>
               {/* {this.state.customers.map((customer) => ( */}
               <div className="row">
                    <div className="col-6">              
                        <h6>Firstname</h6>
                        <input className="firstname" />
                    </div>
                    <div className="col-6">              
                        <h6>Lastname</h6>
                        <input className="firstname" />
                    </div>
               </div>
            
           </div>
         )
    }
}
function mapStateToProps({auth}){
    return{auth}
};
export default connect(mapStateToProps)(Customer_info);