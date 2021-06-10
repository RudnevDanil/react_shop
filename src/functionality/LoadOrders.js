import {firestore} from "../base"

async function LoadOrders(params) {

    let collection = firestore.collection("orders")

    let order = []
    await collection.get()
        .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                const data = doc.data()
                order.push({
                    id: doc.id,
                    cart: JSON.parse(data.cart),
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    message: data.message,
                })
            });
        })
        .catch(function (error) {
            console.log("Error getting documents: ", error);
        })

    return order
}

export default LoadOrders