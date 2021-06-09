import {firestore} from "../base"

async function SendOrder(params) {
    const fields = {
        name: document.getElementById(params.name).value,
        email: document.getElementById(params.email).value,
        phone: document.getElementById(params.phone).value,
        message: document.getElementById(params.message).value,
    }

    if(
        fields.name.toString().length < 3 ||
        fields.email.toString().search("@") === -1 ||
        fields.phone.toString().length > 12 ||
        fields.phone.toString().length < 11 ||
        fields.message.toString().length < 10)
        return false

    await firestore.collection('orders').add({
        ...fields,
        cart: params.items || JSON.stringify({}),
    })

    document.getElementById(params.name).value = ""
    document.getElementById(params.email).value = ""
    document.getElementById(params.phone).value = ""
    document.getElementById(params.message).value = ""

    return true
}

export default SendOrder