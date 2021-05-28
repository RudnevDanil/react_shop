import React from 'react'
import {banners} from "./testBanners"

export default function Carousel(){

    const slider = banners.carousel.map((banner, index) => {
        return index === 0 ?
        (<button type="button" data-bs-target="#carousel_1" data-bs-slide-to={index.toString()} className="active" key={index}/>)
            :
        (<button type="button" data-bs-target="#carousel_1" data-bs-slide-to={index.toString()} key={index}/>)
    })

    const inner = banners.carousel.map((banner, index) => {
        return (
            <div className={"carousel-item " + (index === 0 ? "active" : "")} key={index}>
                <img src={banner} className="d-block w-100" alt="advertisement"/>
            </div>
        )
    })

    return (
        <div className="container">
            <div id="carousel_1" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    {slider}
                </div>

                <div className="carousel-inner">
                    {inner}
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carousel_1" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"/>
                    <span className="visually-hidden">Next</span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#carousel_1" data-bs-slide="next">
                    <span className="carousel-control-next-icon"/>
                    <span className="visually-hidden">Previous</span>
                </button>
            </div>
        </div>
    )
}