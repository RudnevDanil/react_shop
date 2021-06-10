import {firestore} from "../base"

async function LoadOrders(params) {

    let collection = firestore.collection("orders").doc(params.id)

    let order = []
    await collection.delete()
        .then()
        .catch(function (error) {
            console.log("Error getting documents: ", error);
        })

    return order
}

export default LoadOrders