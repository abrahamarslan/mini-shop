import Firebase from 'firebase/app'
import 'firebase/firestore'
import moment from 'moment'

const config = {
    apiKey: "AIzaSyBtr5ToBapwE5tH7JBmC-aT9tnbYsIP0-w",
    authDomain: "lettervued.firebaseapp.com",
    databaseURL: "https://lettervued.firebaseio.com",
    projectId: "lettervued",
    storageBucket: "lettervued.appspot.com",
    messagingSenderId: "31132605298",
    appId: "1:31132605298:web:1e4db38585d14412c0dbeb",
    measurementId: "G-WE2VNSJ6DB"
}

let App = Firebase.initializeApp(config)
let Firestore = App.firestore()

export let FirebaseApp = App

export default {
    addProduct(product) {
        return Firestore.collection('products').add(product)
    },
    saveProduct(id, product) {
        return Firestore.collection('products').doc(id).set(product)
    },
    deleteProduct(id) {
        return Firestore.collection('products').doc(id).delete()
    },
    getProducts() {
        return Firestore.collection('products').get()
    },
    getProduct(id) {
        return Firestore.collection('products').doc(id).get()
    }
}