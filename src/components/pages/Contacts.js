import React from 'react'
import {Link} from "react-router-dom";

export default function Contacts(){
    return (
        <div className="container">
            <div className="row pt-3 text-center">
                <div className="col-md-8">
                    <h3><strong>Our Location</strong></h3>
                    <iframe src="https://www.google.ru/maps/d/embed?mid=1ZB1CNteElVsXdcp98dMBRoMaqfc6oiSI" style={{
                        border: '0',
                        width: '100%',
                        height: '50vh',
                        frameborder: '0'
                    }} allowFullScreen/>
                </div>
                <div className="col-md-4">
                    <h3><strong>Contact us</strong></h3>
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
                        &nbsp;Send
                    </Link>
                </div>
            </div>
        </div>
    )
}