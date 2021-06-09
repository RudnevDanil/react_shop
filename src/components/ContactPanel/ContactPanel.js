import React from 'react'

export default function ContactPanel(props){
    return (
        <div className="row pt-3 text-center">
            <div className="col-md-8">
                <h3><strong>{props.leftHeader}</strong></h3>
                {props.leftInner}
            </div>
            <div className="col-md-4">
                <h3><strong>{props.rightHeader}</strong></h3>
                <div className="mb-2">
                    <input type="input" className="form-control" id="name" placeholder="Name" defaultValue=""/>
                </div>
                <div className="mb-2">
                    <input type="email" className="form-control" id="email" placeholder="E-mail"
                           aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.
                    </div>
                </div>
                <div className="mb-2">
                    <input type="telephone" className="form-control" id="phone" placeholder="Phone"/>
                </div>
                <div className="mb-2">
                    <textarea className="form-control" id="message" rows="3" placeholder="Message"/>
                </div>
                <button type="button" className={"btn " + (props.verificationError ? "btn-outline-danger" : "btn-outline-primary")  + " text-uppercase mt-1 mb-2 float-start"}
                        onClick={props.sendForm}>
                    <i className="fa fa-paper-plane-o" aria-hidden="true"/>
                    &nbsp;Send
                </button>
            </div>
        </div>
    )
}