import React, {Component} from 'react'
import {Link} from "react-router-dom";
import {firestore} from "../../base";
import LoadCategories from "../../functionality/LoadCategories";

export default class Item extends Component{
    constructor(props) {
        super(props);

        // item reload
        if(props.history.location.props) {
            localStorage.setItem(props.history.location.key, JSON.stringify(props.history.location.props))
            props = props.history.location.props
        }
        else
            props = JSON.parse(localStorage.getItem(props.history.location.key))


        this.btnColors = {
            default: "btn-dark",
            error: "btn-danger",
            success: "btn-success",
            waiting: "btn-warning"
        }

        const {id, imgs, title, category, subcategory, description, price} = props || {}
        this.state= {
            id: id || "",
            imgs: imgs || [],
            title: title,
            category: category || "",
            subcategory: subcategory || "",
            description: description || "",
            price: price || "",

            adminMode: localStorage.hasOwnProperty("adminMode") && localStorage.getItem("adminMode") === "true",
            saveButColor: this.btnColors.default,
            removeButColor: this.btnColors.default,
            categories: [],
            categoryName: "",
            buyBtnColor: this.btnColors.default
        }
    }

    catSelect (selectId, onchange = null){
        return (
            this.state.categories.length ?
                <select className="form-select" id={selectId} onChange={onchange} defaultValue={this.state.category}>
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
        if(!parentId)
            parentId = this.state.category
        return (
            this.state.categories.length ?
                <select className="form-select" id={selectId} defaultValue={this.state.subcategory}>
                    <option value={-1} key={-1}/>
                    {
                        this.state.categories
                            .filter((el)=>{
                                return el.id === parentId
                            })
                            .map((obj, i) => {
                                return obj.subcategories.map(subcatEl =>{
                                    return <option value={subcatEl.name} key={subcatEl.id}>{subcatEl.name}</option>
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
                let categoryName = null
                result.forEach(el=>{
                    if(el.id === this.state.category)
                        categoryName = el.title
                })
                this.setState({
                    categories: result,
                    categoryName: categoryName || ""
                })
            })
        }

        const categoriesSelect = this.catSelect("categoriesSelect", this.selectCatForRemoveSubcatChanged)
        const subcategoriesSelect = this.subcatSelect("subcategoriesSelect", this.state.catInRemoveSubCat)

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
                    <img src={img} className="img-fluid mh-100 rounded " alt="loaded"/>
                </div>
            )
        })

        const imagesBlock = (
            <div className="row py-4 d-flex align-items-center justify-content-center">
                {loadedPreview}
                <div/>
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
                                    {categoriesSelect}
                                </div>
                            </div>

                            {/* Subcategory */}
                            <div className="row mb-2">
                                <div className="col-4 fs-4">
                                    Subcategory:
                                </div>
                                <div className="col-8">
                                    {subcategoriesSelect}
                                </div>
                            </div>

                            {/* Description */}
                            <div className="row mb-2 ">
                                <div className="col-4 fs-4">
                                    Description:
                                </div>
                                <div className="col-8">
                                    <textarea className="form-control" id="description" rows="2" placeholder="Description" defaultValue={this.state.description}/>
                                </div>
                            </div>

                            {/* Button */}
                            <div className="row mb-2">
                                <div className="col-4 fs-4">
                                    <button type="button" className={"btn " + this.state.saveButColor + " w-100"} onClick={this.save}>
                                        Save&nbsp;
                                        <i className="far fa-save"/>
                                    </button>
                                </div>
                                <div className="col-4 fs-4">
                                    {
                                        this.state.id !== "" ?
                                            <button type="button" className={"btn " + this.state.removeButColor + " w-100"} onClick={this.remove}>
                                                Remove&nbsp;
                                                <i className="fas fa-trash-alt"/>
                                            </button>
                                        :
                                            ""
                                    }
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
                                {this.state.categoryName}
                            </Link>
                            &nbsp;
                            <i className="fas fa-angle-right"/>
                            &nbsp;
                            <Link to={{pathname:"/catalog", props: {category: this.state.category, subcategory: this.state.subcategory}}} style={linkStyles}>
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
                                    &nbsp;<i className="fas fa-ruble-sign"/>
                                </div>
                            </div>

                            {/* Button */}
                            <div className="row mb-2">
                                <div className="col-12 fs-4">
                                    <button type="button" className={"btn w-100 " + (this.state.buyBtnColor)} onClick={this.addToCart}>
                                        Buy&nbsp;
                                        <i className="fas fa-shopping-basket"/>
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
        [...document.getElementById("uploadImgs").files].forEach((f)=>{
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

    remove = async() => {
        if(this.state.id !== "") // new item
        {
            this.setState({removeButColor: this.btnColors.waiting})
            await firestore.collection("items").doc(this.state.id)
                .get()
                .then((result) => {
                    if(result.exists)
                    {
                        console.log(result);
                        firestore.collection("items").doc(this.state.id)
                            .delete()
                            .then(()=>{
                                this.setState({removeButColor: this.btnColors.success})
                                setTimeout(()=>{this.setState({removeButColor: this.btnColors.default})}, 1000)
                            })
                    }
                    else
                        throw new Error("item does not exist")
                })
                .catch((error) => {
                    this.setState({removeButColor: this.btnColors.error})
                    setTimeout(()=>{this.setState({removeButColor: this.btnColors.default})}, 1000)
                    console.error("Error updating document: ", error);
                })
        }
        else{
            this.setState({removeButColor: this.btnColors.error})
            setTimeout(()=>{this.setState({removeButColor: this.btnColors.default})}, 1000)
        }
    }

    save = async () => {
        const title = document.getElementById("title").value
        const category = document.getElementById("categoriesSelect")
        const subcategory = document.getElementById("subcategoriesSelect")
        const description = document.getElementById("description").value
        const price = document.getElementById("price").value

        if(!title || !category || !subcategory || category.value === -1 || subcategory.value === -1 || !description || !price)
        {
            this.setState({saveButColor: this.btnColors.error})
            setTimeout(()=>{this.setState({saveButColor: this.btnColors.default})}, 1000)
            return
        }

        this.setState({saveButColor: this.btnColors.waiting})

        if(this.state.id === "") // new item
        {
            await firestore.collection('items').add({
                title: title,
                imgs: this.state.imgs,
                category: category.value,
                subcategory: subcategory.value,
                description: description,
                price: price,
            })

            this.setState({saveButColor: this.btnColors.success})
            setTimeout(()=>{this.setState({saveButColor: this.btnColors.default})}, 1000)
        }
        else // update item
        {
            await firestore.collection("items").doc(this.state.id)
                .get()
                .then((result) => {
                    if(result.exists)
                    {
                        console.log(result);
                        firestore.collection("items").doc(this.state.id)
                            .update(
                                "title", title,
                                "imgs", this.state.imgs,
                                "category", category.value,
                                "subcategory", subcategory.value,
                                "description", description,
                                "price", price,
                            )
                            .then(()=>{
                                this.setState({saveButColor: this.btnColors.success})
                                setTimeout(()=>{this.setState({saveButColor: this.btnColors.default})}, 1000)
                            })
                    }
                    else
                        throw  new Error("item does not exist")
                })
                .catch((error) => {
                    this.setState({saveButColor: this.btnColors.error})
                    setTimeout(()=>{this.setState({saveButColor: this.btnColors.default})}, 1000)
                    console.error("Error updating document: ", error);
                })
        }
    }

    _setAmount(id, diff){
        let localStorageNow = JSON.parse(localStorage.getItem("cart"))
        if(localStorageNow[id] + diff <= 0)
        {
            delete localStorageNow[id]
            localStorage.setItem("cart", JSON.stringify({...localStorageNow}))
        }
        else
            localStorage.setItem("cart", JSON.stringify({...localStorageNow, [id]: localStorageNow[id] ? localStorageNow[id] + diff : 1}))
    }

    addToCart = async() => {
        this._setAmount(this.state.id, 1)
        this.setState({buyBtnColor: this.btnColors.success})
        setTimeout(()=>{this.setState({buyBtnColor: this.btnColors.default})}, 1000)
    }

    selectCatForRemoveSubcatChanged = () =>{
        this.setState({
            catInRemoveSubCat: document.getElementById("categoriesSelect").value
        })
    }
}