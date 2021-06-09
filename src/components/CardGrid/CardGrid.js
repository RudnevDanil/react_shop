import React from 'react'
import Card from "../Card/Card";

export default function CardGrid(props){
    const cards = props.items.map((el, i) => <Card item={el} key={i}/>)

    const cardRows = []
    for(let i = 0; i < cards.length; i+=4)
    {
        cardRows.push(
            <div className="row" key={i}>
                {i < cards.length ? <div className="col-6 col-lg-3 pb-3">{cards[i]}</div>: ""}
                {i+1 < cards.length ? <div className="col-6 col-lg-3 pb-3">{cards[i+1]}</div>: ""}
                {i+2 < cards.length ? <div className="col-6 col-lg-3 pb-3">{cards[i+2]}</div>: ""}
                {i+3 < cards.length ? <div className="col-6 col-lg-3 pb-3">{cards[i+3]}</div>: ""}
            </div>
        )
    }

    return (<div>{cardRows.map(el=>el)}</div>)
}