import React, {Component} from 'react'
import ContactPanel from "../ContactPanel/ContactPanel";
import LoadCards from "../../functionality/LoadCards"
import CardGrid from "../CardGrid/CardGrid";
import SendOrder from "../../functionality/SendOrder";

export default class Cart extends Component {

    state = {
        verificationError: false,
        items: [],
    }

    sendForm = async () => {
        let localStorageNow = JSON.parse(localStorage.getItem("cart"))

        if(await SendOrder({
            items: JSON.stringify(this.state.items.map(item => {
                return {
                    id: item.id,
                    price: item.price,
                    amount: localStorageNow[item.id],
                }
            })),
            name: 'name',
            email: 'email',
            phone: 'phone',
            message: 'message',
        })) {
            localStorage.setItem("cart", JSON.stringify({}))
            this.props.history.push('/') // redirect
        }
        else
            this.verificationError()
    }

    verificationError(){
        this.setState({verificationError:true})
        setTimeout(()=>{this.setState({verificationError:false})}, 1000)
    }

    render() {
        const isCartFull = localStorage.hasOwnProperty("cart") && Object.keys(JSON.parse(localStorage.getItem("cart"))).length

        if(this.state.items.length === 0 && isCartFull)
            LoadCards({arr: Object.keys(JSON.parse(localStorage.getItem("cart")))})
                .then((items) => {
                    if(items.length)
                        this.setState({items: items,})
                })

        const inner =
            isCartFull ?
                (this.state.items.length === 0 ?
                    <div className="py-5"><div className="spinner-border" role="status"/></div>
                    :
                    <CardGrid items={this.state.items}/>
                )
                :
                <h4>Your cart is empty!</h4>

        return (
            <div className="container">
                <ContactPanel
                    leftHeader="Cart"
                    rightHeader="Order"
                    leftInner={
                        <div>
                            {inner}
                        </div>
                    }
                    sendForm={this.sendForm}
                    verificationError={this.state.verificationError}
                />
            </div>
        )
    }
}