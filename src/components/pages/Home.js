import React from 'react'
import {Link} from "react-router-dom";
import {testItem} from "../Catalog/testCatalogData"
import Carousel from "../Carousel/Carousel";

export default function Home(){


    return (
        <div>
            <div className="py-3">
                <Carousel/>
            </div>
            <h1>
                Home page.
            </h1>
            <Link to={{pathname:"/item", props: {adminMode: true, ...testItem.getObj()}}}>Test item</Link>
        </div>
    )
}