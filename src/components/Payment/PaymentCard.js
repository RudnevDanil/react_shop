import React from 'react'

export default function PaymentCard(props) {
    const {img, title, subTitle, documents} = props;

    const docs = documents.map((doc, key) => {
        return (
            <div className="row pt-2" key={key}>
                <div className="col-11 fs-6">
                    <i className="fas fa-check text-success"></i>&nbsp;{doc}
                </div>
            </div>
        )
    })

    return (
        <div className="container py-4">
            <div className="row">
                <div className="col-1 align-self-start d-none d-md-block">
                    <img className="img-fluid" src={img} alt={title}/>
                </div>
                <div className="col-11">
                    <div className="row pt-2">
                        <div className=" fs-4 fw-bold">
                            {title}
                        </div>
                    </div>
                    <div className="row pt-2">
                        <div className="col-12 fs-6">
                            {subTitle}
                        </div>
                    </div>
                    <div className="row pt-2">
                        <div className="col-12 fs-6 fw-bold">
                            Documents are issued:
                        </div>
                    </div>
                    {docs}
                </div>
            </div>
        </div>
    )
}