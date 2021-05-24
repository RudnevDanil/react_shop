import React from 'react'
import './Footer.css'

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

                <div className='col-sm-2'>
                    <h4>Navigation</h4>
                    <ul className='list-unstyled'>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Catalog</a></li>
                        <li><a href="/">Contacts</a></li>
                        <li><a href="/">Delivery</a></li>
                        <li><a href="/">Cart</a></li>
                    </ul>
                </div>

                <div className='col-sm-2 me-5'>
                    <h4>Categories</h4>
                    <ul className='list-unstyled'>
                        <li><a href="/">Lorem Ipsum</a></li>
                        <li><a href="/">Lorem Ipsum</a></li>
                        <li><a href="/">Lorem Ipsum</a></li>
                        <li><a href="/">Lorem Ipsum</a></li>
                        <li><a href="/">Lorem Ipsum</a></li>
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