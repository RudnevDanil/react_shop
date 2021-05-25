import React from 'react'
import './Footer.css'
import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <div style={{height: "100%"}} className='container-fluid bg-dark text-light'>
            <div className='row'>
                <div className='col-sm ms-5'>
                    <h4>Contact us</h4>
                    <ul className='list-unstyled'>
                        <li>&nbsp;</li>
                        <li>Rostov-on-Don</li>
                        <li>Chekhov Avenue, 109</li>
                        <li>Office 249</li>
                        <li>+7-(960)-463-88-88</li>
                    </ul>
                </div>

                <div className='col-sm-2 d-none d-lg-block'>
                    <h4>Navigation</h4>
                    <ul className='list-unstyled'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/catalog">Catalog</Link></li>
                        <li><Link to="/contacts">Contacts</Link></li>
                        <li><Link to="/delivery">Delivery</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                    </ul>
                </div>

                <div className='col-sm-2 me-5 d-none d-lg-block'>
                    <h4>Categories</h4>
                    <ul className='list-unstyled'>
                        <li><Link to="/Lorem">Lorem Ipsum</Link></li>
                        <li><Link to="/Lorem">Lorem Ipsum</Link></li>
                        <li><Link to="/Lorem">Lorem Ipsum</Link></li>
                        <li><Link to="/Lorem">Lorem Ipsum</Link></li>
                        <li><Link to="/Lorem">Lorem Ipsum</Link></li>
                    </ul>
                </div>
            </div>
            <div>
                <p className='text-xs-center ms-5'>
                    &copy;{new Date().getFullYear()}Camp shop - All Rights Reserved
                </p>
            </div>
        </div>
    )
}