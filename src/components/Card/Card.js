import React, {Component} from 'react'
import defaultImg from "./defaultImg.jpg"
import {Redirect} from "react-router-dom"

export default class Card extends Component {

    state = {
        redirect: null
    }

    render() {
        if (this.state.redirect) return <Redirect to={{
            pathname: "/item",
            props: {adminMode: this.props.removeFromCartBut ,...this.props.item}
            }}/>;

        let [hit, offer, discount, placeholder] = [, , , ""]

        if (this.props.marks) {
            if (this.props.marks.hit)
                hit = (<div className="col-3  d-flex justify-content-center">
                    <span className="badge rounded-pill bg-success">HIT</span>
                </div>)

            if (this.props.marks.specOffer)
                offer = (<div className="col-3  d-flex justify-content-center">
                    <span className="badge rounded-pill bg-primary">SPECIAL</span>
                </div>)

            if (this.props.marks.discount)
                discount = (<div className="col-3  d-flex justify-content-center">
                    <span className="badge rounded-pill bg-danger">{this.props.marks.discount}</span>
                </div>)

            if (!hit && !offer && !discount)
                placeholder = <div className="col-12">&nbsp;</div>
        }

        const button = this.props.removeFromCartBut && this.props.removeFromCartBut === "true" ?
            (
                <button type="button" className="btn btn-danger float-end mw-100">
                    Remove&nbsp;
                    <i className="fas fa-trash-alt"/>
                </button>
            ) :
            (
                <button type="button" className="btn btn-primary float-end mw-100">
                    Add&nbsp;
                    <i className="fas fa-shopping-basket"/>
                </button>
            )

        const item = this.props.item
        const title = item ? item.title : "______"
        const subcategory = item ? item.subcategory : "______"
        const price = item ? item.price : "______"

        return (
            <div className="card" style={{width: "100%"}} onClick={() => {this.setState({redirect: true})}}>
                {this.props.marks ?
                    <div className="row py-2 d-flex justify-content-center">
                        {placeholder}
                        {hit ? hit : ""}
                        {offer ? offer : ""}
                        {discount ? discount : ""}
                    </div>
                    :
                    <div></div>
                }
                <img src={defaultImg} alt="Item image" className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{subcategory}</h6>
                    <br/>
                    <h5 className="card-title">{price}</h5>
                    {button}
                </div>
            </div>
        )
    }
}
