import React from 'react'
import {categories} from "../Catalog/testCatalogData.js"
import CardGrid from "../CardGrid/CardGrid";

export default function Catalog(){
    const cats = categories.map(obj =>{
        const subcats = obj.subcategories.map(subcat => (
            <div className="fs-4 ps-4">{subcat}</div>
        ))
        return (
            <div>
                <div className="fs-4 fw-bold">{obj.title}</div>
                {subcats}
            </div>
        )
    })

    // debug show
    const ids = [];
    for(let i = 0; i < 22; i++)
        ids.push(i);

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-3">
                    {cats}
                </div>
                <div className="col-md-9">
                    <CardGrid arr={ids}/>
                    <nav className="d-flex justify-content-end">
                        <ul className="pagination pagination-lg">
                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}