import React from 'react'
import {Link} from "react-router-dom";
import {testItem} from "../Catalog/testCatalogData"

export default function Home(){
    return (
        <div>
            <h1>
                Home page.
            </h1>
            <Link to={{pathname:"/item", props: {adminMode: true, ...testItem.getObj()}}}>Test item</Link>
        </div>
    )
}