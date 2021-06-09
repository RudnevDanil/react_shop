import React from 'react'
import Carousel from "../Carousel/Carousel";
import PopularCategories from "../PopularCategories/PopularCategories";
import Banner from "../Banner/Banner";
import CardsCarousel from "../CardsCarousel/CardsCarousel";

import banner_1 from "../Banner/banner_1.jpg"
import banner_2 from "../Banner/banner_2.jpg"

export default function Home(){
    return (
        <div>
            <div className="py-3">
                <Carousel/>
            </div>

            <PopularCategories/>

            <Banner img={banner_1}/>

            <CardsCarousel/>

            <Banner img={banner_2}/>
        </div>
    )
}