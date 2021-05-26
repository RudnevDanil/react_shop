import React from 'react'
import PaymentCard from "../Payment/PaymentCard";
import paymentData from "../Payment/paymentData"

export default function Payment(){
    const cards = paymentData.map((cardData, key) => {
        return <PaymentCard
            img={cardData.img}
            title={cardData.title}
            subTitle={cardData.subTitle}
            documents={cardData.documents}
            key={key}
        />
    })

    return (
        <div>
            <h3 className="text-center py-3">
                Payment
            </h3>
            {cards}
            <div className="container text-start pt-5 pb-3" style={{color: "#8d8c9e"}}>
                <p>
                    Payment for the order is made only in rubles. If you pay for the order more than 2 days after
                    the date of registration, the order amount can be recalculated at the new prices, which will
                    be additionally informed by the sales department specialist of our online store.
                </p>
            </div>
        </div>
    )
}