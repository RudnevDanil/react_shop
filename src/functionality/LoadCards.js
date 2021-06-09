import {firestore} from "../base"

async function LoadCards(params) {

    let collection = firestore.collection("items")

    if (params.subcategory && params.subcategory !== "")
        collection = collection.where("subcategory", "==", params.subcategory)

    if (params.category && params.category !== "")
        collection = collection.where("category", "==", params.category)

    if (params.amount && params.amount !== "")
        collection = collection.limit(params.amount)

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