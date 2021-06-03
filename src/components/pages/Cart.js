import React from 'react'
import {Link} from "react-router-dom";
import CardGrid from "../CardGrid/CardGrid";

export default function Cart(){

    // debug show
    const ids = [];
    for(let i = 0; i < 7; i++)
        ids.push(i);

    return (
        <div className="container py-5">
            <div className="row pt-3">
                <div className="col-md-8">
                    <h3 className="text-center"><strong>Cart</strong></h3>
                    <CardGrid arr={ids} removeFromCartBut/>
                </div>
                <div className="col-md-4">
                    <h3><strong>Order</strong></h3>
                    <div className="mb-2">
                        <input type="input" className="form-control" id="name" placeholder="Name"/>
                    </div>
                    <div className="mb-2">
                        <input type="email" className="form-control" id="email" placeholder="E-mail" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-2">
                        <input type="telephone" className="form-control" id="phone" placeholder="Phone"/>
                    </div>
                    <div className="mb-2">
                        <textarea className="form-control" id="message" rows="3" placeholder="Message"/>
                    </div>
                    <Link to="/" className="btn btn-outline-primary text-uppercase mt-1 mb-2 float-start">
                        <i className="fa fa-paper-plane-o" aria-hidden="true"/>
                        &nbsp;Send order
                    </Link>
                </div>
            </div>
        </div>
    )
}