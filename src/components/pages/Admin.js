import React, {Component} from 'react'
import {Link} from "react-router-dom";
import {testItem} from "../Catalog/testCatalogData";

export default class Admin extends Component{
    constructor(props) {
        super(props);
        this.state = {
            logged: false,
            addCategoryDone: false,
            addSubCategoryDone: false,
        };
    }

    render()
    {
        const body = this.state.logged ?
            ( // if logged show actions
                <div className="row text-center">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-4">
                                <Link to={{pathname:"/item", props: {adminMode: true}}} className="btn btn-dark mt-4">
                                    Create new Item&nbsp;
                                    <i className="fas fa-plus-square"/>
                                </Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="mt-4">
                                    <input type="input" className="form-control" id="name" placeholder="New category"/>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <button type="button" className={"btn " + (this.state.addCategoryDone ? "btn-success" : "btn-dark") + " mt-4"}
                                        onClick={this.newCategory}>
                                    Add new category&nbsp;
                                    <i className="fas fa-caret-right"/>
                                </button>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-md-4">
                                <div className="mt-4">
                                    <select className="form-select">
                                        <option value="DEFAULT" >Open this select menu</option> {/* TEST */}
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mt-4">
                                    <input type="input" className="form-control" id="name" placeholder="New subcategory"/>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <button type="button" className={"btn " + (this.state.addSubCategoryDone ? "btn-success" : "btn-dark") + " mt-4"}
                                        onClick={this.newSubCategory}>
                                    Add new subcategory&nbsp;
                                    <i className="fas fa-caret-right"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )
            :
            ( // if not logged show log in page
                <div className="row pt-5 text-center d-flex align-items-center justify-content-center">
                        <div className="col-md-4">
                            <div className="mt-4">
                                <input type="password" className="form-control" id="adminPass" placeholder="Password"/>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <button type="button" className="btn btn-dark mt-4" onClick={this.logInClicked}>
                                Log in&nbsp;
                                <i className="fas fa-caret-right"/>
                            </button>
                        </div>
                </div>
            );

        return (
            <div className="container">
                <h3 className="py-3 text-center"><strong>Admin page</strong></h3>
                {body}
            </div>
            )
    }

    logInClicked = () =>{
        console.log(" --- Test --- need auth validation via server")

        this.setState({
            logged: true
        })
    }

    newCategory = () =>{
        console.log(" --- Test --- need add category via server")

        this.setState({
            addCategoryDone: true
        })

        setTimeout(()=>{
            this.setState({
                addCategoryDone: false
            })
        }, 1000)
    }

    newSubCategory = () =>{
        console.log(" --- Test --- need add subcategory via server")

        this.setState({
            addSubCategoryDone: true
        })

        setTimeout(()=>{
            this.setState({
                addSubCategoryDone: false
            })
        }, 1000)
    }
}
