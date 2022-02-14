// import firebase from 'firebase/app'
// import firebase from "firebase"
import  firebase from 'firebase'
import "firebase/auth"
import "firebase/database"


const app = firebase.initializeApp({
    apiKey: "AIzaSyBjpwPZgVQRdwRf4FfCaHH4rRB-FgQcrzs",
  authDomain: "todo-c2d07.firebaseapp.com",
  databaseURL: "https://todo-c2d07-default-rtdb.firebaseio.com",
  projectId: "todo-c2d07",
  storageBucket: "todo-c2d07.appspot.com",
  messagingSenderId: "300856305118",
  appId: "1:300856305118:web:3cbc27bef4c47a3f11694f",
  measurementId: "G-7EF8PMEYLJ"
})

export const auth = app.auth()
export const db = app.database()
export default app