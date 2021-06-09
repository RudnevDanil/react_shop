import React, {Component} from 'react'
import CardGrid from "../CardGrid/CardGrid";
import LoadCategories from "../../functionality/LoadCategories";
import LoadCards from "../../functionality/LoadCards";

export default class Catalog extends Component {

    constructor(props) {
        super(props);

        let category = props.history.location.props && props.history.location.props.category ? props.history.location.props.category : null
        let subcategory = props.history.location.props && props.history.location.props.subcategory ? props.history.location.props.subcategory : null

        this.state = {
            categories: [],
            current: subcategory ? subcategory : (category ? category : ""),
            items: [],
            category: category,
            subcategory: subcategory,
            loadedAmount: -1,
        }
    }

    componentWillUnmount() {
        // fix Warning: Can't perform a React state update on an unmounted component
        this.setState = (state,callback)=>{
            return;
        };
    }

    changeCatArrow = (e) => {
        const name = e.target.getAttribute('value_name')
        this.setState({current: name})
    }

    catClicked = (e) => {
        this.changeCatArrow(e)

        // load card by value_id
        this.setState({
            category: e.target.getAttribute('value_id'),
            subcategory: null,
            items: [],
            loadedAmount: -1,
        })
    }

    subcatClicked = (e) => {
        this.changeCatArrow(e)

        // load card by value_name
        this.setState({
            category: e.target.getAttribute('parent_id'),
            subcategory: e.target.getAttribute('value_name'),
            items: [],
            loadedAmount: -1,
        })
    }

    render() {

        if(!this.state.categories.length) {
            LoadCategories().then((result) => {
                let cat = this.state.subcategory // do this because store category as id, and current arrow waiting name
                if(this.state.current !== "" && !this.state.subcategory)
                    result.forEach(el => {
                        if(el.id === this.state.category)
                            cat = el.title
                    })

                this.setState({
                    categories: result,
                    current: cat
                })
            })
        }

        if(this.state.items.length === 0 && this.state.loadedAmount !== 0)
            LoadCards({category:  this.state.category, subcategory:  this.state.subcategory})
                .then((items) => {
                    this.setState({
                        items: items,
                        loadedAmount: items.length
                    })
                })

        const cats = this.state.categories.length ?
            this.state.categories.map(obj => {
                const subcats = obj.subcategories.map(subcat => (
                    <div className="fs-4 ps-5" key={"subcat" + subcat.name} value_name={subcat.name} parent_id={obj.id} onClick={this.subcatClicked}>
                        <i className="fas fa-angle-right text-success" style={{opacity: this.state.current === subcat.name ? "1" : "0"}}/>
                        &nbsp;{subcat.name}
                    </div>
                ))
                return (
                    <div key={"cat" + obj.title} >
                        <div className="fs-4 fw-bold" value_name={obj.title} value_id={obj.id} onClick={this.catClicked}>
                            <i className="fas fa-angle-right text-success" style={{opacity: this.state.current === obj.title ? "1" : "0"}}/>
                            &nbsp;{obj.title}
                        </div>
                        {subcats}
                    </div>
                )
            }) :
            <div className="spinner-border" role="status"/>

        return (
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-3 justify-content-center">
                        {cats}
                    </div>
                    <div className="col-md-9">
                        {this.state.loadedAmount === 0 ?
                            <h3>No items yet.</h3>
                            :
                            this.state.loadedAmount < 0 ?
                                <div className="spinner-border" role="status"/>
                                :
                                <CardGrid items={this.state.items}/>
                        }
                    </div>
                </div>
            </div>
        )
    }
}