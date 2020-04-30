import React, {Component} from 'react';
import {connect } from 'react-redux';
import './Dashboard.css' ;
import MainHeader from './MainHeader';
import Sidebar from './Sidebar';

class Dashboard extends Component{
    render(){
        return(
            <div>
                <MainHeader>
                    <Sidebar/>
                </MainHeader>
                <div className="row">
                    <div className="col m4">
                        <div className="card" >
                        <a href="/customers">
                            <div className="card-content">
                                <p>Total customers</p>
                                <p>300</p>
                             </div>
                            </a> 
                    </div>
                </div>
                <div className="col m4">
                    <div className="card">
                    <a href="/orders">
                        <div className="card-content">
                            <p>Total orders</p>
                            <p>20</p>
                        </div>
                        </a>
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