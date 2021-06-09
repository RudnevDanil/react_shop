import React, {Component} from 'react'
import defaultImg from "./defaultImg.jpg"
import {Redirect} from "react-router-dom"
import "./Card.css"

export default class Card extends Component {

    constructor(props) {
        super(props);

        if(!localStorage.hasOwnProperty("cart"))
            localStorage.setItem("cart", JSON.stringify({}))

        this.state = {
            redirect: null,
            amount: this.props.item ? this._getAmount(this.props.item.id) : 0
        }
    }

    _getAmount(id){
        let localStorageNow = JSON.parse(localStorage.getItem("cart"))
        return localStorageNow[id] ? localStorageNow[id]: 0
    }

    _setAmount(id, diff){
        let localStorageNow = JSON.parse(localStorage.getItem("cart"))
        if(localStorageNow[id] + diff <= 0)
        {
            delete localStorageNow[id]
            localStorage.setItem("cart", JSON.stringify({...localStorageNow}))
        }
        else
            localStorage.setItem("cart", JSON.stringify({...localStorageNow, [id]: localStorageNow[id] ? localStorageNow[id] + diff : 1}))
    }

    addToCart = async(event) => {
        this._setAmount(this.props.item.id, 1)
        this.setState({amount: this._getAmount(this.props.item.id)})
        //event.stopPropagation()
    }

    decFromCart = async(event) => {
        this._setAmount(this.props.item.id, -1)
        this.setState({amount: this._getAmount(this.props.item.id)})
        //event.stopPropagation()
    }


    render() {
        if (this.state.redirect) return <Redirect to={{
            pathname: "/item",
            props: {...this.props.item}
            }}/>;

        let [hit, offer, discount, placeholder] = [null, null, null, ""]

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

        // if buttons should be different for admin and user check localStorage.hasOwnProperty("adminMode") && localStorage.getItem("adminMode") === "true"
        const button = this.state.amount ?
                <div className="btn-group w-100" role="group">
                    <button type="button" className="btn btn-outline-dark" onClick={this.decFromCart}><i className="fas fa-minus"/></button>
                    <button type="button" className="btn btn-outline-dark">{this.state.amount}</button>
                    <button type="button" className="btn btn-outline-dark" onClick={this.addToCart}><i className="fas fa-plus"/></button>
                </div>
                :
                <button type="button" className={"btn btn-dark float-end mw-100"} onClick={this.addToCart}>
                    Add&nbsp;
                    <i className="fas fa-shopping-basket"/>
                </button>


        const item = this.props.item
        const title = item ? item.title : "______"
        const subcategory = item ? item.subcategory : "______"
        const price = item ? item.price : "______"
        const src = item && item.imgs.length > 0 ? item.imgs[0] : defaultImg

        return (
            <div className="card" style={{width: "100%"}}>
                {this.props.marks ?
                    <div className="row py-2 d-flex justify-content-center">
                        {placeholder}
                        {hit ? hit : ""}
                        {offer ? offer : ""}
                        {discount ? discount : ""}
                    </div>
                    :
                    <div/>
                }
                <img src={src} alt="Item" className="card-img-top"  onClick={() => {this.setState({redirect: true})}}/>
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
