import React from 'react'
import Card from "../Card/Card";
import LoadCards from "../../functionality/LoadCards"

export default function CardsCarousel() {


    return(
        <div className="container">
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
                                    <div className="row">
                                        <div className="col-4">
                                            <Card hit/>
                                        </div>
                                        <div className="col-4">
                                            <Card hit/>
                                        </div>
                                        <div className="col-4">
                                            <Card hit/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="container pb-5">
                                    <div className="row">
                                        <div className="col-4">
                                            <Card specOffer/>
                                        </div>
                                        <div className="col-4">
                                            <Card specOffer/>
                                        </div>
                                        <div className="col-4">
                                            <Card discount="-25%"/>
                                        </div>
                                    </div>
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