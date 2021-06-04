import React, {Component} from 'react'
//import {categories} from "../Catalog/testCatalogData.js"
import CardGrid from "../CardGrid/CardGrid";
import LoadCategories from "../../functionality/LoadCategories";

export default class Catalog extends Component {

    state = {
        categories: []
    }

    render() {
        const categories = LoadCategories().then((result) => {
            this.setState({categories: result})
        })

        const cats = this.state.categories.length ?
            this.state.categories.map(obj => {
                const subcats = obj.subcategories.map(subcat => (
                    <div className="fs-4 ps-4">{subcat}</div>
                ))
                return (
                    <div>
                        <div className="fs-4 fw-bold">{obj.title}</div>
                        {subcats}
                    </div>
                )
            }) :
            <div className="spinner-border" role="status"/>

        // debug show
        const ids = [];
        for (let i = 0; i < 22; i++)
            ids.push(i);

        return (
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-3 justify-content-center">
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
}