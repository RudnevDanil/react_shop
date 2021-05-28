import React, {Component} from 'react'
import {Link} from "react-router-dom";
import {testItem} from "../Catalog/testCatalogData";

export default class Item extends Component{
    constructor(props) {
        super(props);
        const {id, imgs, title, category, subcategory, description, price} = props.location.props || {}
        this.state= {
            id: id || "",
            imgs: imgs || [],
            title: title,
            category: category || "",
            subcategory: subcategory || "",
            description: description || "",
            price: price || "",

            adminMode: props.location.props && props.location.props.adminMode || false,
        }

        console.log(this.state)
    }

    render()
    {
        let [mode_1, mode_2] = ["d-none", ""]
        if(this.state.adminMode)
            [mode_1, mode_2] = [mode_2, mode_1]

        const linkStyles = {
            color: "rgba(0, 0, 0, 0.5)",
            textDecoration: "none"
        }

        const loadedPreview = this.state.imgs.map((img, i)=>{
            return (
                <div key={i} className="mb-4 d-flex justify-content-center" style={{
                    width: "20vw",
                    height: "20vh"
                }}>
                    <img src={img} className="img-fluid mh-100 rounded "/>
                </div>
            )
        })

        const imagesBlock = (
            <div className="row py-4 d-flex align-items-center justify-content-center">
                {loadedPreview}
                <div></div>
                <div className={"col-4 " + mode_1}>
                    <input type="file" className="form-control" id="uploadImgs" multiple onChange={this.onImageChange}/>
                </div>
            </div>
        )

        return (
            <div className="container">
                {/* Admin interface */}
                <div className={"container pb-4 pt-3 " + mode_1}>
                    <div className="row">
                        <div className="col-md-6">
                            {/* Images */}
                            {imagesBlock}
                        </div>

                        <div className="col-md-6">
                            {/* Title */}
                            <div className="row mb-2">
                                <div className="col-4 fs-4">
                                    Title:
                                </div>
                                <div className="col-8">
                                    <input type="input" className="form-control" id="title" placeholder="Title" defaultValue={this.state.title}/>
                                </div>
                            </div>

                            {/* Price */}
                            <div className="row mb-2">
                                <div className="col-4 fs-4">
                                    Price:
                                </div>
                                <div className="col-4">
                                    <input type="number" className="form-control" id="price" placeholder="Price" defaultValue={this.state.price}/>
                                </div>
                            </div>


                            {/* Category */}
                            <div className="row mb-2">
                                <div className="col-4 fs-4">
                                    Category:
                                </div>
                                <div className="col-8">
                                    <select className="form-select">
                                        <option value="DEFAULT" >Open this select menu</option> {/* TEST */}
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>

                            {/* Subcategory */}
                            <div className="row mb-2">
                                <div className="col-4 fs-4">
                                    Subcategory:
                                </div>
                                <div className="col-8">
                                    <select className="form-select">
                                        <option value="DEFAULT" >Open this select menu</option> {/* TEST */}
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="row mb-2 ">
                                <div className="col-4 fs-4">
                                    Description:
                                </div>
                                <div className="col-8">
                                    <textarea className="form-control" id="description" rows="2" placeholder="Description" defaultValue={this.state.title}/>
                                </div>
                            </div>

                            {/* Button */}
                            <div className="row mb-2">
                                <div className="col-4 fs-4">
                                    <button type="button" className="btn btn-dark w-100" onClick={this.save}>
                                        Save&nbsp;
                                        <i className="far fa-save"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* User interface */}
                <div className={"container pb-4 pt-3 " + mode_2}>
                    {/* Title */}
                    <div className="row">
                        <div className="col-md-12">
                            <h3>{this.state.title}</h3>
                        </div>
                    </div>

                    {/* Category and Subcategory */}
                    <div className="row mb-2">
                        <div className="col-12 fs-6 text-black-50">
                            <Link to={{pathname:"/catalog", props: {category: this.state.category}}} style={linkStyles}>
                                {this.state.category}
                            </Link>
                            &nbsp;
                            <i className="fas fa-angle-right"></i>
                            &nbsp;
                            <Link to={{pathname:"/catalog", props: {subcategory: this.state.subcategory}}} style={linkStyles}>
                                {this.state.subcategory}
                            </Link>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-10">
                            {/* Images */}
                            {imagesBlock}
                        </div>
                        <div className="col-md-2">
                            {/* Price */}
                            <div className="row mb-2">
                                <div className="col-12 fs-4">
                                    {this.state.price}
                                    &nbsp;<i className="fas fa-ruble-sign"></i>
                                </div>
                            </div>

                            {/* Button */}
                            <div className="row mb-2">
                                <div className="col-12 fs-4">
                                    <button type="button" className="btn btn-dark w-100" onClick={this.addToCart}>
                                        Buy&nbsp;
                                        <i className="fas fa-shopping-basket"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="row mb-2">
                        <div className="col-md-12 fs-3">
                            <h5>Описание:</h5>
                        </div>
                        <div className="col-md-12 fs-5">
                            {this.state.description}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    onImageChange = () => {
        const imgs = [];
        let counter = 0;
        [...document.getElementById("uploadImgs").files].map((f)=>{
            let reader = new FileReader();
            reader.onload = (e) => {
                imgs.push(e.target.result)
                counter -= 1
                if(!counter)
                    this.setState({imgs: imgs});
            };
            counter += 1
            reader.readAsDataURL(f);
        });

    }

    addToCart = () =>{
        console.log(" --- Test --- need add to cart")
    }
}