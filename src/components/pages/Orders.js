import React, {Component} from 'react'
import LoadOrders from "../../functionality/LoadOrders";
import RemoveOrder from "../../functionality/RemoveOrder";

export default class Orders extends Component {

    state = {
        orders: [],
        ordersLoading: true,
    }

    removeOrder = async(id)=>{
        await RemoveOrder({id})
        this.setState({
            orders: [],
            ordersLoading: true,
        })
    }

    render(){

        if(localStorage.getItem("adminMode") !== "true") {
            this.props.history.push('/admin') // redirect for not logged users
            return <div/>
        }

        if(this.state.orders.length === 0 && this.state.ordersLoading)
            LoadOrders()
                .then((orders) => {
                    this.setState({
                        orders: orders,
                        ordersLoading: false,
                    })
                })

        let ordersPanel = null
        if(this.state.orders.length !== 0)
            ordersPanel = this.state.orders.map(el => {
                return (
                    <div key={el.id} className="col-4 py-2 px-2" >
                        <div className="card px-2 py-2" style={{
                            border: "2px solid black",
                            borderRadius: "1rem",
                            minHeight: "20vh"
                        }}>
                            <h5 className="card-title"><span className="fw-bold">Client:</span>&nbsp;{el.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted"><span className="fw-bold">E-mail:</span>&nbsp;{el.email}</h6>
                            <h6 className="card-subtitle mb-2 text-muted"><span className="fw-bold">Phone:</span>&nbsp;{el.phone}</h6>
                            <p className="card-text"><span className="fw-bold">Message:</span>&nbsp;{el.message}</p>
                            <p className="card-text"><span className="fw-bold">Order:</span>&nbsp;{!el.cart.length? "Nothing was ordered.":"Ordered " + el.cart.length + " items"}</p>
                            {
                                el.cart.length ? el.cart.map((orderEl, i) => {
                                    return <div key={"orderEl_" + i} className="mb-2">
                                        <p className="card-text my-0"><span className="fw-bold">Vendor Code:</span>&nbsp;{orderEl.id}</p>
                                        <p className="card-text my-0"><span className="fw-bold">Price:</span>&nbsp;{orderEl.price}</p>
                                        <p className="card-text my-0"><span className="fw-bold">Amount:</span>&nbsp;{orderEl.amount}</p>
                                    </div>
                                }) : ""
                            }
                            <button type="button" className={"btn btn-dark mw-100"} onClick={()=>{this.removeOrder(el.id)}}>
                                Done&nbsp;
                                <i className="fas fa-trash-alt"/>
                            </button>
                        </div>
                    </div>
                )
            })

        return (
            <div className="container">
                <h3 className="text-center py-3">
                    Orders
                </h3>
                {
                    this.state.ordersLoading ?
                        <div className="spinner-border" role="status"/>
                        :
                        (this.state.orders.length === 0 ? <h4>There are no orders yet!</h4> : <div className="row">{ordersPanel}</div>)
                }
            </div>
        )
    }
}