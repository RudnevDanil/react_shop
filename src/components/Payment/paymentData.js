import cash from "./cash.svg"
import creditCard from "./creditCard.svg"
import cardLess from "./cardLess.svg"

const paymentData = [
    {
        img: cash,
        title: "Cash on delivery",
        subTitle: "You can pay for your purchase in cash either at the office of our online store, or by courier, after checking the product. We do not ask for money in advance: you can check the goods in the presence of the courier and only then make the payment.",
        documents: ["Bill of lading", "Cash receipt"]
    },
    {
        img: creditCard,
        title: "VISA or MasterCard.",
        subTitle: "When paying for an order with a bank card, the payment is processed on the bank's authorization page, where you must enter the card details (number, expiration date, cardholder name, CVC2 / CVV2 code). We do not store or store your card details.",
        documents: ["Bill of lading"]
    },
    {
        img: cardLess,
        title: "Cashless payment",
        subTitle: "After the order is processed and approved by the manager, an invoice for payment will be generated and sent to your email address specified during registration.\n\nShipment is possible only with 100% payment of the order.",
        documents: ["Original of the contract, if it was concluded or on request", "Invoice", "Bill of lading"]
    },
]

export default paymentData;
