import React, {Component} from 'react'
import logo from '../../logo.png'
import {Link} from "react-router-dom";
import "./Navbar.css"

export default class Navbar extends Component {
    state = {
        active: "home"
    }

    render() {
        return (
            <div className="container h-100">
                <nav className="navbar navbar-expand-md navbar-dark bg-dark h-100 ">
                    <div className="container-fluid">

                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt='logo' style={{width: 30, height: 30}}/>
                        </Link>
                        <Link className="navbar-brand" to="/">
                            Camp Shop
                        </Link>

                        <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                        <span>
                            <i className="fas fa-bars" style={{color: "#fff"}}/>
                        </span>
                        </button>

                        <div className="collapse navbar-collapse bg-dark ps-3 " style={{zIndex: "2222"}}
                             id="navbarSupportedContent">
                            <ul className="navbar-nav m-auto" style={{fontSize: "0.85rem"}}>

                                <li className="nav-item" onClick={()=>{this.setState({active:"home"})}}>
                                    <Link className={"nav-link text-uppercase mx-lg-2 " + (this.state.active === "home" ? "active" : "")} to="/">
                                        Home&nbsp;<i className="fas fa-home"/>
                                    </Link>
                                </li>

                                <li className="nav-item" onClick={()=>{this.setState({active:"catalog"})}}>
                                    <Link className={"nav-link text-uppercase mx-lg-2 " + (this.state.active === "catalog" ? "active" : "")}  to="/catalog">
                                        Catalog
                                    </Link>
                                </li>

                                <li className="nav-item" onClick={()=>{this.setState({active:"contacts"})}}>
                                    <Link className={"nav-link text-uppercase mx-lg-2 " + (this.state.active === "contacts" ? "active" : "")} to="/contacts">
                                        Contacts
                                    </Link>
                                </li>

                                <li className="nav-item" onClick={()=>{this.setState({active:"delivery"})}}>
                                    <Link className={"nav-link text-uppercase mx-lg-2 " + (this.state.active === "delivery" ? "active" : "")} to="/delivery">
                                        Delivery&nbsp;<i className="fas fa-truck"/>
                                    </Link>
                                </li>

                                <li className="nav-item" onClick={()=>{this.setState({active:"payment"})}}>
                                    <Link className={"nav-link text-uppercase mx-lg-2 " + (this.state.active === "payment" ? "active" : "")} to="/payment">
                                        Payment&nbsp;<i className="fas fa-money-bill-alt"/>
                                    </Link>
                                </li>

                                <li className="nav-item" onClick={()=>{this.setState({active:"cart"})}}>
                                    <Link className={"nav-link text-uppercase mx-lg-2 " + (this.state.active === "cart" ? "active" : "")} to="/cart">
                                        Cart&nbsp;<i className="fas fa-shopping-cart"/>
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}