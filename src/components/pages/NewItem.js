import React, {Component} from 'react'

export default class NewItem extends Component{
    constructor(props) {
        super(props);

        this.state={
            id: "",
            title: "",
            imgs: [],
            category: "",
            subcategory: "",
            description: "",
            price: ""
        }
    }

    render()
    {
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
                <div className="col-4">
                    <input type="file" className="form-control" id="uploadImgs" multiple onChange={this.onImageChange}/>
                </div>
            </div>
        )

        return (
            <div className="container">
                <h3 className="py-3 text-center"><strong>New Item</strong></h3>

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
                                <input type="input" className="form-control" id="title" placeholder="Title"/>
                            </div>
                        </div>

                        {/* Price */}
                        <div className="row mb-2">
                            <div className="col-4 fs-4">
                                Price:
                            </div>
                            <div className="col-4">
                                <input type="number" className="form-control" id="price" placeholder="Price"/>
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
                        <div className="row mb-2">
                            <div className="col-4 fs-4">
                                Description:
                            </div>
                            <div className="col-8">
                                <textarea className="form-control" id="description" rows="2" placeholder="Description"/>
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

    logInClicked = () =>{
        console.log(" --- Test --- need save item")
    }
}