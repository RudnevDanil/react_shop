import React from 'react'
import {Link} from "react-router-dom";

export default function PageNotFound(){
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="py-5 text-center">
                        <h1>Ops!</h1>
                        <h2>Error 404 Not Found</h2>
                        <div className="my-2">
                            Sorry, an error occurred. The requested page was not found!
                        </div>
                        <div className="my-2">
                            <Link to="/" className="btn btn-outline-primary btn-lg">
                                <i className="fas fa-home"/>&nbsp;Back to Main
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}