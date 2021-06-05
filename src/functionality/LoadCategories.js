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
                    id: doc.id,
                    parentId: doc.data().parent,
                    name: doc.data().name
                }
            });
        });

    return categories.map(cat => {return {title: cat.name, id: cat.id, subcategories:
        subcategories.filter(el => el.parentId === cat.id)
    }})
}

export default LoadCategories