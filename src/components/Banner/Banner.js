import React from 'react'

export default function Banner(props) {
    return(
        <div className="container pb-5">
            <img src={props.img} className="img-fluid mh-100"/>
        </div>
    )
}