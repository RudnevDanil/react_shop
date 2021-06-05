import {firestore} from "../base"
import LoadCategories from "./LoadCategories";

async function LoadCards(params) {
    let collection = firestore.collection("items")

    if (params.amount && params.amount !== "")
        collection = collection.limit(params.amount)

    if (params.category && params.category !== "")
        collection = collection.where("category", "==", params.category)

    let items = []
    await collection.get()
        .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                const data = doc.data()
                items.push({
                    id: doc.id,
                    title: data.title,
                    imgs: data.imgs,
                    category: data.category,
                    subcategory: data.subcategory,
                    description: data.description,
                    price: data.price,
                })
            });
        })
        .catch(function (error) {
            console.log("Error getting documents: ", error);
        })
    return items
}

export default LoadCards