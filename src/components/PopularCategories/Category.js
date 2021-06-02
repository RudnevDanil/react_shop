import React from 'react'
import guns from "./gun.png";

export default function (props) {

    return(
        <div className={props.w + " pe-0 " + (props.r ? "ps-3 " : "")}>
            <div  style={{backgroundColor:"#fff"}}>
                <div className="row pt-2">
                    <div className="col-7 ps-4">
                        <span className="badge rounded-pill bg-success">{props.label}</span>
                    </div>
                </div>
                <div className="row d-flex justify-content-center" style={{height: "18vh"}}>
                    <img src={props.img} className=".img-fluid mh-100" />
                </div>
            </div>
        </div>
    )
}
