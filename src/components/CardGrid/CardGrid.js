import React from 'react'
import Card from "../Card/Card";

export default function Cart(props){
    const cards = props.arr.map((id, i) => <Card removeFromCartBut={props.removeFromCartBut ? "true" : "false"}/>)

    const cardRows = []
    for(let i = 0; i < cards.length; i+=4)
    {
        cardRows.push(
            <div className="row">
                {i < cards.length ? <div className="col-6 col-lg-3 pb-3">{cards[i]}</div>: ""}
                {i+1 < cards.length ? <div className="col-6 col-lg-3 pb-3">{cards[i+1]}</div>: ""}
                {i+2 < cards.length ? <div className="col-6 col-lg-3 pb-3">{cards[i+2]}</div>: ""}
                {i+3 < cards.length ? <div className="col-6 col-lg-3 pb-3">{cards[i+3]}</div>: ""}
            </div>
        )
    }

    return (<div>{cardRows.map(el=>el)}</div>)
}