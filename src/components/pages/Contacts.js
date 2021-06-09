import React, {Component} from 'react'
import ContactPanel from "../ContactPanel/ContactPanel";
import SendOrder from "../../functionality/SendOrder";

export default class Contacts extends Component {
    state = {
        verificationError: false
    }

    sendForm = async () => {
        if(await SendOrder({
            name: 'name',
            email: 'email',
            phone: 'phone',
            message: 'message',
        }))
            this.props.history.push('/') // redirect
        else
            this.verificationError()
    }

    verificationError(){
        this.setState({verificationError:true})
        setTimeout(()=>{this.setState({verificationError:false})}, 1000)
    }

    render() {
        return (
            <div className="container">
                <ContactPanel
                    leftHeader="Our Location"
                    rightHeader="Contact us"
                    leftInner={
                        <iframe title="map" src="https://www.google.ru/maps/d/embed?mid=1ZB1CNteElVsXdcp98dMBRoMaqfc6oiSI" style={{
                        border: '0',
                        width: '100%',
                        height: '50vh',
                        frameborder: '0'
                            }} allowFullScreen/>
                    }
                    verificationError={this.state.verificationError}
                    sendForm={this.sendForm}
                />
            </div>
        )
    }
}