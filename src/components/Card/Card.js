import React from 'react'
import defaultImg from "./defaultImg.jpg"

export default function Card(props) {
    let [hit, offer, discount, placeholder] = [,,, ""]

    if(props.hit)
        hit = (<div className="col-3  d-flex justify-content-center">
            <span className="badge rounded-pill bg-success">HIT</span>
        </div>)

    if(props.specOffer)
        offer = (<div className="col-3  d-flex justify-content-center">
            <span className="badge rounded-pill bg-primary">SPECIAL</span>
        </div>)

    if(props.discount)
        discount = (<div className="col-3  d-flex justify-content-center">
            <span className="badge rounded-pill bg-danger">{props.discount}</span>
        </div>)

    if(!hit && !offer && !discount)
        placeholder = <div className="col-12">&nbsp;</div>

    console.log(props.removeFromCartBut)
    const button = props.removeFromCartBut && props.removeFromCartBut === "true" ?
        (
            <button type="button" className="btn btn-danger float-end mw-100">
                Remove&nbsp;
                <i className="fas fa-trash-alt"></i>
            </button>
        ) :
        (
            <button type="button" className="btn btn-primary float-end mw-100">
                To cart&nbsp;
                <i className="fas fa-shopping-basket"/>
            </button>
        )

    const title = "title"
    const category = "category"
    const price = "price"

    return(
        <div className="card" style={{width: "100%"}}>
            <div className="row py-2 d-flex justify-content-center">
                {placeholder}
                {hit ? hit : ""}
                {offer ? offer : ""}
                {discount ? discount : ""}
            </div>
            <img src={defaultImg} alt="Item image" className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{category}</h6>
                <br/>
                <h5 className="card-title">{price}</h5>
                {button}
            </div>
        </div>
    )
}
