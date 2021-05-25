import React from 'react'
import DeliveryCard from "../Delivery/DeliveryCard";
import deliveryData from "../Delivery/deliveryData.js"

export default function Delivery(){
    const cards = deliveryData.map((cardData, key) => {
        return <DeliveryCard
            img={cardData.img}
            title={cardData.title}
            subTitle={cardData.subTitle}
            localPrice={cardData.localPrice}
            localDeliveryTime={cardData.localDeliveryTime}
            countryPrice={cardData.countryPrice}
            countryDeliveryTime={cardData.countryDeliveryTime}
            key={key}
        />
    })

    return (
        <div>
            <h3 className="text-center py-3">
                Delivery
            </h3>
            {cards}
            <div className="container text-start pt-5 pb-3" style={{color: "#8d8c9e"}}>
                <p>
                    The price and delivery time of the complete set are indicated, subject to its availability in stock.
                </p>
                <p>
                    We only work with trusted courier services.
                    By placing an order in our online store, you can be sure that the order will be delivered
                    in high-quality packaging and in the proper form. The cargo is insured by our company.
                </p>
            </div>
        </div>
    )
}