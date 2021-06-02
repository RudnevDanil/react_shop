import React from 'react'
import {Link} from "react-router-dom";
import {testItem} from "../Catalog/testCatalogData"
import Carousel from "../Carousel/Carousel";
import PopularCategories from "../PopularCategories/PopularCategories";

export default function Home(){


    return (
        <div>
            <div className="py-3">
                <Carousel/>
            </div>

            <PopularCategories/>

            <h1>
                Home page.
            </h1>
            <Link to={{pathname:"/item", props: {adminMode: true, ...testItem.getObj()}}}>Test item</Link>
        </div>
    )
}