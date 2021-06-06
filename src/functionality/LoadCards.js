import {firestore} from "../base"
import LoadCategories from "./LoadCategories";

async function LoadCards(params) {
    let collection = firestore.collection("items")

    if (params.category && params.category !== "")
        collection = collection.where("category", "==", params.category)

    if (params.amount && params.amount !== "") {

        collection = collection.orderBy("title")
        if(params.lastVisible)
            collection = collection.startAfter(params.lastVisible)
        collection = collection.limit(params.amount)
    }


    let items = []
    let lastVisible = null
    await collection.get()
        .then(function (querySnapshot) {
            lastVisible = querySnapshot.docs[querySnapshot.docs.length-1]
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
    return {items, lastVisible}
}

export default LoadCards