import {useCollectionData} from "react-firebase-hooks/firestore";
import {firestore} from "../base"

async function LoadCategories() {
    let categories = []
    await firestore.collection('categories')
        .get()
        .then(querySnapshot => {
             categories = querySnapshot.docs.map(doc => {
                 return {
                     id: doc.id,
                     name: doc.data().name
                 }
             });
        });

    let subcategories = []
    await firestore.collection('subcategories')
        .get()
        .then(querySnapshot => {
            subcategories = querySnapshot.docs.map(doc => {
                return {
                    parentId: doc.data().parent.id,
                    name: doc.data().name
                }
            });
        });

    return categories.map(cat => {return {title: cat.name, subcategories:
        subcategories.filter(el => el.parentId === cat.id).map(el => el.name)
    }})
}

export default LoadCategories