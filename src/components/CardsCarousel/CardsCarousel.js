import React, {Component} from 'react'
import Card from "../Card/Card";
import LoadCards from "../../functionality/LoadCards"

export default class CardsCarousel extends Component{

    state = {
        items: {
            items: [],
            lastVisible: null
        },
    }

    render() {
        if(this.state.items.items.length === 0)
            LoadCards({amount: 6, lastVisible: this.state.items.lastVisible/*, category: "2", subcategory: ""*/})
                .then((items) => {
                    //console.log(items)
                    this.setState({items: items})
                    return
                })

        const marks = [{hit: true}, {specOffer: true}, {discount: "-25%"}, {discount: "-30%"}, {hit: true}, {specOffer: true}]

        const currentCards = []
        for (let i = 0; i < 6; i++)
            currentCards.push(
                <div className="col-4">
                    <Card item={this.state.items.items[i]} marks={marks[i]}/>
                </div>
            )
        const currentCardsRow = []
        for (let i = 0; i < 2; i++)
            currentCardsRow.push(
                <div className="row">
                    {currentCards[i * 3 + 0]}
                    {currentCards[i * 3 + 1]}
                    {currentCards[i * 3 + 2]}
                </div>
            )

        return (
            <div className="container mb-5">
                <div id="cardCarouselControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="row">
                        <div className="col-1 d-flex justify-content-center">
                            <button className="text-dark fs-2" style={{border: "none", opacity: "0.8"}}
                                    type="button" data-bs-target="#cardCarouselControls" data-bs-slide="prev">
                                <i className="fas fa-chevron-left"/>
                            </button>
                        </div>

                        <div className="col-10">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="container pb-5">
                                        {currentCardsRow[0]}
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="container pb-5">
                                        {currentCardsRow[1]}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-1 d-flex justify-content-center">
                            <button className="text-dark fs-2" style={{border: "none", opacity: "0.8"}}
                                    type="button" data-bs-target="#cardCarouselControls" data-bs-slide="next">
                                <i className="fas fa-chevron-right"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}