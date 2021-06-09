import React, {Component} from 'react'
import {firestore} from "../../base"

export default class Contacts extends Component {
    state = {
        verificationError: false
    }

    sendForm = async () => {
        const fields = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            message: document.getElementById('message').value,
        }

        if(
            fields.name.toString().length < 3 ||
            fields.email.toString().search("@") === -1 ||
            fields.phone.toString().length > 12 ||
            fields.phone.toString().length < 11 ||
            fields.message.toString().length < 10)
        {
            this.verificationError()
            return
        }

        await firestore.collection('orders').add({
            ...fields,
            cart: JSON.stringify({}),
        })

        document.getElementById('name').value = ""
        document.getElementById('email').value = ""
        document.getElementById('phone').value = ""
        document.getElementById('message').value = ""
        // this.props.history.push('/') // redirect
    }

    verificationError(){
        this.setState({verificationError:true})
        setTimeout(()=>{this.setState({verificationError:false})}, 1000)
    }

    render() {

        return (
            <div className="container">
                <div className="row pt-3 text-center">
                    <div className="col-md-8">
                        <h3><strong>Our Location</strong></h3>
                        <iframe title="map" src="https://www.google.ru/maps/d/embed?mid=1ZB1CNteElVsXdcp98dMBRoMaqfc6oiSI" style={{
                            border: '0',
                            width: '100%',
                            height: '50vh',
                            frameborder: '0'
                        }} allowFullScreen/>
                    </div>
                    <div className="col-md-4">
                        <h3><strong>Contact us</strong></h3>
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
                        <button type="button" className={"btn " + (this.state.verificationError ? "btn-outline-danger" : "btn-outline-primary")  + " text-uppercase mt-1 mb-2 float-start"}
                                onClick={this.sendForm}>
                            <i className="fa fa-paper-plane-o" aria-hidden="true"/>
                            &nbsp;Send
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}