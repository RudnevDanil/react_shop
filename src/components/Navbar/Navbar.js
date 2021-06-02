import React from 'react'
import logo from '../../logo.png'
import {Link} from "react-router-dom";
import "./Navbar.css"

export default function Navbar() {
    return (
        <div className="container h-100">
            <nav className="navbar navbar-expand-md navbar-dark bg-dark position-sticky top-0 h-100">
                <div className="container-fluid px-0">

                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt='logo' style={{width:30, height: 30}} />
                    </Link>

                    <Link className="navbar-brand" to="/">
                        Camp Shop
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span>
                            <i className="fas fa-bars" style={{color:"#fff"}}/>
                        </span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto" style={{width: "100%", fontSize: "0.85rem"}}>

                            <li className="nav-item mx-lg-2">
                                <Link className="nav-link active text-uppercase d-flex" to="/">
                                    <div className="d-none d-lg-block">
                                        Home&nbsp;<i className="fas fa-home"/>
                                    </div>
                                    <div className="d-lg-none">
                                        Home&nbsp;
                                    </div>
                                </Link>
                            </li>

                            <li className="nav-item mx-lg-2">
                                <Link className="nav-link text-uppercase" to="/catalog">
                                    Catalog
                                </Link>
                            </li>

                            <li className="nav-item mx-lg-2">
                                <Link className="nav-link text-uppercase" to="/contacts">
                                    Contacts
                                </Link>
                            </li>

                            <li className="nav-item mx-lg-2">
                                <Link className="nav-link text-uppercase" to="/delivery">
                                    <div className="d-none d-lg-block">
                                        Delivery&nbsp;<i className="fas fa-truck"/>
                                    </div>
                                    <div className="d-lg-none">
                                        Delivery&nbsp;
                                    </div>
                                </Link>
                            </li>

                            <li className="nav-item mx-lg-2">
                                <Link className="nav-link text-uppercase" to="/payment">
                                    <div className="d-none d-lg-block">
                                        Payment&nbsp;<i className="fas fa-money-bill-alt"/>
                                    </div>
                                    <div className="d-lg-none">
                                        Payment&nbsp;
                                    </div>
                                </Link>
                            </li>

                            <li className="nav-item mx-lg-2">
                                <Link className="nav-link text-uppercase" to="/cart">
                                    <div className="d-none d-lg-block">
                                        Cart&nbsp;<i className="fas fa-shopping-cart"/>
                                    </div>
                                    <div className="d-lg-none">
                                        Cart&nbsp;
                                    </div>
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

/*
<li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
       data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown
    </a>
    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li><a className="dropdown-item" href="#">Action</a></li>
        <li><a className="dropdown-item" href="#">Another action</a></li>
        <li>
            <hr className="dropdown-divider"/>
        </li>
        <li><a className="dropdown-item" href="#">Something else here</a></li>
    </ul>
</li>




<form className="d-flex">
    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn btn-outline-success" type="submit">Search</button>
</form>
*/