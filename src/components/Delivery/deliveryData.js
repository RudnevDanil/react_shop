import courierImg from "./courier.svg"
import pickPointImg from "./pickPoint.svg"
import postOfficeImg from "./postOffice.svg"
import freeImg from "./free.svg"

const deliveryData = [
    {
        img: courierImg,
        title: "By courier to the door",
        subTitle: "Delivery is carried out by the SDEK courier service.",
        localPrice: "250",
        localDeliveryTime: "2-3",
        countryPrice: "250-1000",
        countryDeliveryTime: "2-7",
    },
    {
        img: pickPointImg,
        title: "To the pick-up point",
        subTitle: "Delivery is carried out by the SDEK courier service to any pick-up point",
        localPrice: "200",
        localDeliveryTime: "2-3",
        countryPrice: "200-900",
        countryDeliveryTime: "2-7",
    },
    {
        img: postOfficeImg,
        title: "By Russian Post",
        subTitle: "Delivery is carried out to the Russian Post office at the address",
        localPrice: "150",
        localDeliveryTime: "3-5",
        countryPrice: "150-600",
        countryDeliveryTime: "3-12",
    },
    {
        img: freeImg,
        title: "Free shipping",
        subTitle: "When paying with a bank card online on the website or by bank transfer.",
    }
]

export default deliveryData;