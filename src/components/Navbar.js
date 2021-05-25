import React from 'react'
import logo from '../logo.png'
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark position-sticky top-0">
            <div className="container-fluid">

                <Link className="navbar-brand mx-5" to="/">
                    <img src={logo} alt='logo' style={{width:30, height: 30}} />
                </Link>
                <Link className="navbar-brand mx-5" to="/">
                    Camp Shop
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto  mb-2 mb-lg-0">

                        <li className="nav-item">
                            <Link className="nav-link active text-uppercase mx-3" to="/">
                                Home&nbsp;<i className="fas fa-home"></i>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-uppercase mx-3" to="/catalog">
                                Catalog
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-uppercase mx-3" to="/contacts">
                                Contacts
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-uppercase mx-3" to="/delivery">
                                Delivery&nbsp;<i className="fas fa-truck"></i>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-uppercase mx-3" to="/cart">
                                Cart&nbsp;<i className="fas fa-shopping-cart"></i>
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
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