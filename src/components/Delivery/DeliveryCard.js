import React from 'react'

export default function DeliveryCard(props) {
    const {img, title, subTitle, localPrice, localDeliveryTime, countryPrice, countryDeliveryTime} = props;

    return (
        <div className="container py-4">
            <div className="row">
                <div className="col-1 align-self-center d-none d-md-block">
                    <img className="img-fluid" src={img} alt={title}/>
                </div>
                <div className="col-11">
                    <div className="row">
                        <div className="col-6">
                            <h5>{title}</h5>
                        </div>
                        <div className="col-3">
                            <h5>{localPrice && localDeliveryTime ? "Rostov-on-Don" : ""}</h5>
                        </div>
                        <div className="col-3">
                            <h5>{countryPrice && countryDeliveryTime ? "Russia" : ""}</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 fs-6">
                            {subTitle}
                        </div>
                        <div className="col-3 fs-6">
                            {localPrice && localDeliveryTime ? localPrice + " P / " + localDeliveryTime + " days" : ""}
                        </div>
                        <div className="col-3 fs-6">
                            {countryPrice && countryDeliveryTime ? countryPrice + " P / " + countryDeliveryTime + " days" : ""}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}