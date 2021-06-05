import React, {Component} from 'react'
import {Link} from "react-router-dom";
import {testItem} from "../Catalog/testCatalogData";
import {firestore, firebase} from "../../base"
import LoadCategories from "../../functionality/LoadCategories";

export default class Admin extends Component{
    constructor(props) {
        super(props);

        this.btnColors = {
            default: "btn-dark",
            error: "btn-danger",
            success: "btn-success",
            waiting: "btn-warning"
        }

        this.state = {
            authError: false,
            logged: false,
            addCategoryColor: this.btnColors.default,
            removeCategoryColor: this.btnColors.default,
            removeSubcategoryColor: this.btnColors.default,
            addSubCategoryColor: this.btnColors.default,
            categories: [],
            catInRemoveSubCat: "",
        };
    }

    catSelect (selectId, onchange = null){
        return (
            this.state.categories.length ?
            <select className="form-select" id={selectId} onChange={onchange}>
                <option value={-1} key={-1}/>
                {
                    this.state.categories.map((obj, i) => {
                        return <option value={obj.id} key={obj.id}>{obj.title}</option>
                    })
                }
            </select>
            :
            <div className="spinner-border" role="status"/>
        )
    }

    subcatSelect (selectId, parentId){
        return (
            this.state.categories.length ?
                <select className="form-select" id={selectId}>
                    <option value={-1} key={-1}/>
                    {
                        this.state.categories
                            .filter((el)=>{
                                return el.id === parentId
                            })
                            .map((obj, i) => {
                                return obj.subcategories.map(subcatEl =>{
                                    return <option value={subcatEl.parentId} key={subcatEl.id}>{subcatEl.name}</option>
                                })
                            })
                    }
                </select>
                :
                <div className="spinner-border" role="status"/>
        )
    }

    componentDidUpdate(prevProps) {
        if(!this.state.categories.length) {
            this.selectCatForRemoveSubcatChanged()
        }
    }

    render()
    {
        if(!this.state.categories.length) {
            LoadCategories().then((result) => {
                this.setState({categories: result})
            })
        }

        const catsSelectForSubCat = this.catSelect("parentOfSubCat")
        const catsSelectForRemoveCat = this.catSelect("removeCatSelect")
        const catsSelectForRemoveSubcat = this.catSelect("removeSubcatSelectCats", this.selectCatForRemoveSubcatChanged)
        const subcatsSelectForRemoveSubcat = this.subcatSelect("removeSubcatSelectSubcats", this.state.catInRemoveSubCat)

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
                                    <input type="input" className="form-control" id="newCategory" placeholder="New category"/>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <button type="button" className={"btn " + this.state.addCategoryColor + " mt-4"}
                                        onClick={this.newCategory}>
                                    Add new category&nbsp;
                                    <i className="fas fa-caret-right"/>
                                </button>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4">
                                <div className="mt-4">
                                    {catsSelectForRemoveCat}
                                </div>
                            </div>
                            <div className="col-md-4">
                                <button type="button" className={"btn " + this.state.removeCategoryColor + " mt-4"}
                                        onClick={this.removeCategory}>
                                    Remove category&nbsp;
                                    <i className="fas fa-trash-alt"/>
                                </button>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4">
                                <div className="mt-4">
                                    {catsSelectForRemoveSubcat}
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mt-4">
                                    {subcatsSelectForRemoveSubcat}
                                </div>
                            </div>
                            <div className="col-md-4">
                                <button type="button" className={"btn " + this.state.removeSubcategoryColor + " mt-4"}
                                        onClick={this.removeSubcategory}>
                                    Remove subcategory&nbsp;
                                    <i className="fas fa-trash-alt"/>
                                </button>
                            </div>
                        </div>

                        <div className="row mb-4">
                            <div className="col-md-4">
                                <div className="mt-4">
                                    {catsSelectForSubCat}
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mt-4">
                                    <input type="input" className="form-control" id="newSubCategory" placeholder="New subcategory"/>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <button type="button" className={"btn " + this.state.addSubCategoryColor + " mt-4"}
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
                            <button type="button" className={"btn " + (this.state.authError ? "btn-danger" : "btn-dark") + " mt-4"} onClick={this.logInClicked}>
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
        firebase.auth().signInWithEmailAndPassword("admin@admin.ru", document.getElementById("adminPass").value)
            .then(user => {
                this.setState({logged: true})
            })
            .catch(err =>{
                this.setState({authError: true})
                setTimeout(()=>{this.setState({authError: false})}, 1000)
            })
    }

    newCategory = async () =>{
        const newCat = document.getElementById("newCategory").value
        if(!newCat.length)
        {
            this.setState({
                addCategoryColor: this.btnColors.error
            })

            setTimeout(()=>{
                this.setState({
                    addCategoryColor: this.btnColors.default
                })
            }, 1000)
            return
        }

         this.setState({
             addCategoryColor: this.btnColors.waiting
         })
         await firestore.collection('categories').add({
             name: newCat
         })

         document.getElementById("newCategory").value = ""
        this.setState({
            addCategoryColor: this.btnColors.success
        })

        setTimeout(()=>{
            this.setState({
                addCategoryColor: this.btnColors.default
            })
        }, 1000)
    }

    removeCategory = async () =>{
        const currentCat = document.getElementById("removeCatSelect")

        if(!currentCat || currentCat.value === -1)
        {
            this.setState({
                removeCategoryColor: this.btnColors.error
            })

            setTimeout(()=>{
                this.setState({
                    removeCategoryColor: this.btnColors.default
                })
            }, 1000)
            return
        }

        this.setState({
            removeCategoryColor: this.btnColors.waiting
        })

        const query = await firestore
            .collection('categories')
            .where('name', '==', currentCat.options[currentCat.selectedIndex].text)
            .get();

        const batch = firestore.batch();
        query.forEach(doc => {batch.delete(doc.ref);});
        await batch.commit();

        this.setState({
            removeCategoryColor: this.btnColors.success
        })

        setTimeout(()=>{
            this.setState({
                removeCategoryColor: this.btnColors.default
            })
        }, 1000)
    }

    removeSubcategory = async () =>{
        const currentSubcat = document.getElementById("removeSubcatSelectSubcats")

        if(!currentSubcat || currentSubcat.value === -1)
        {
            this.setState({
                removeSubcategoryColor: this.btnColors.error
            })

            setTimeout(()=>{
                this.setState({
                    removeSubcategoryColor: this.btnColors.default
                })
            }, 1000)
            return
        }

        this.setState({
            removeSubcategoryColor: this.btnColors.waiting
        })

        const query = await firestore
            .collection('subcategories')
            .where('name', '==', currentSubcat.options[currentSubcat.selectedIndex].text)
            .where('parent', '==', currentSubcat.value)
            .get();

        const batch = firestore.batch();
        query.forEach(doc => {batch.delete(doc.ref);});
        await batch.commit();

        this.setState({
            removeSubcategoryColor: this.btnColors.success
        })

        setTimeout(()=>{
            this.setState({
                removeSubcategoryColor: this.btnColors.default
            })
        }, 1000)
    }

    newSubCategory = async () =>{
        const newSubCat = document.getElementById("newSubCategory").value
        const parentOfSubCat = document.getElementById("parentOfSubCat")

        if(!newSubCat.length || !parentOfSubCat || parentOfSubCat.value === -1)
        {
            this.setState({
                addSubCategoryColor: this.btnColors.error
            })

            setTimeout(()=>{
                this.setState({
                    addSubCategoryColor: this.btnColors.default
                })
            }, 1000)
            return
        }

        this.setState({
            addSubCategoryColor: this.btnColors.waiting
        })
        await firestore.collection('subcategories').add({
            name: newSubCat,
            parent: parentOfSubCat.value
        })

        document.getElementById("newSubCategory").value = ""
        this.setState({
            addSubCategoryColor: this.btnColors.success
        })

        setTimeout(()=>{
            this.setState({
                addSubCategoryColor: this.btnColors.default
            })
        }, 1000)
    }

    selectCatForRemoveSubcatChanged = () =>{
        this.setState({
            catInRemoveSubCat: document.getElementById("removeSubcatSelectCats").value
        })
    }
}
