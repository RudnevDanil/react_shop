import React from 'react'
import {banners} from "./testBanners"

export default function Carousel(){

    const slider = banners.carousel.map((banner, index) => {
        return (<button type="button" data-bs-target="#carousel_1" data-bs-slide-to={index.toString()} className={"bg-dark " + (index === 0 ? "active" : "")} key={index}/>)
    })

    const inner = banners.carousel.map((banner, index) => {
        return (
            <div className={"carousel-item " + (index === 0 ? "active" : "")} key={index}>
                <img src={banner} className="d-block w-100" alt="advertisement"/>
            </div>
        )
    })

    const buttonStyle = {
        border: "none",
        opacity: "0.8",
        height: "3rem",
        top: "calc(50% - 1.5rem)",
    }

    return (
        <div className="container px-0 pb-5">
            <div id="carousel_1" className="carousel slide position-relative" data-bs-ride="carousel">

                <div className="carousel-inner">
                    {inner}
                </div>

                <button className="text-white fs-3 position-absolute start-0 bg-dark" style={{
                    ...buttonStyle,
                    borderTopRightRadius: "0.4rem",
                    borderBottomRightRadius: "0.4rem",

                }}
                        type="button" data-bs-target="#carousel_1" data-bs-slide="prev">
                    <i className="fas fa-chevron-left"/>
                </button>

                <button className="text-white fs-3 position-absolute end-0 bg-dark" style={{
                    ...buttonStyle,
                    borderTopLeftRadius: "0.4rem",
                    borderBottomLeftRadius: "0.4rem",
                }}
                        type="button" data-bs-target="#carousel_1" data-bs-slide="next">
                    <i className="fas fa-chevron-right"/>
                </button>

                <div className="carousel-indicators top-100" style={{height: "2rem"}}>
                    {slider}
                </div>
            </div>
        </div>
    )
}

/*
height: 4rem;
top: calc(50% - 2rem);
border-top-right-radius: 0.4rem;
border-bottom-right-radius: 0.4rem;
*/