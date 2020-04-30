import React, { Component } from "react";
import {connect } from 'react-redux';
import M from "materialize-css/dist/js/materialize.min.js";
import { BrowserRouter, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";

class Sidebar extends Component {
    componentDidMount() {
        let elem = document.querySelector(".sidenav");
        let instance = M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
    }

    render() {
        return (
            <div>
                <ul id="slide-out" className="sidenav">
                    <li />
                    <li>
                        <a href="/home">
                            <i className="material-icons">home</i>Home
                        </a>
                    </li>
                    <li>
                        <a href="/notifications">
                            <i className="material-icons">notifications</i>Notifications
                        </a>
                    </li>
                    <li>
                        <a href="/customers">
                            <i className="material-icons">person_outline</i>Customers
                        </a>
                    </li>
                    <li>
                        <a href="/orders">
                            <i className="material-icons">assignment</i>Orders
                        </a>
                    </li>
                    <li>
                        <a href="/history">
                            <i className="material-icons">history</i>History
                        </a>
                    </li>
                </ul>
                <a href="#" data-target="slide-out" className="sidenav-trigger">
                    <i className="material-icons">dehaze</i>
                </a>
            </div>
        );
    }
}

function mapStateToProps({auth}){
    return{auth}
};
export default connect(mapStateToProps)(Sidebar);