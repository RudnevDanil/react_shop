import React from 'react'

export default function Footer() {
    return (
        <div className='container-fluid bg-dark text-light'>
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
                        <li>Home</li>
                        <li>Catalog</li>
                        <li>Contacts</li>
                        <li>Delivery</li>
                        <li>Cart</li>
                    </ul>
                </div>

                <div className='col-sm-2 me-5'>
                    <h4>Categories</h4>
                    <ul className='list-unstyled'>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                    </ul>
                </div>
            </div>
            <div className='ms-5'>
                <p className='text-xs-center'>
                    &copy;{new Date().getFullYear()}Camp shop - All Rights Reserved
                </p>
            </div>
        </div>
    )
}