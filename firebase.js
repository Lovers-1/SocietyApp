import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/database'

const fire = firebase.initializeApp({
    apiKey: "AIzaSyDM3elUX8AI0AkrpXGPQObCJqRWXRzrSC0",
    authDomain: "react-contact-69e6e.firebaseapp.com",
    databaseURL: "https://react-contact-69e6e-default-rtdb.firebaseio.com",
    projectId: "react-contact-69e6e",
    storageBucket: "react-contact-69e6e.appspot.com",
    messagingSenderId: "974248023568",
    appId: "1:974248023568:web:7bb66f13d5c0dd3e611c95"
  });
  
  // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
export const auth = fire.auth();
//export const db = fire.firestore();
export const db=firebase.database();
export default {fire,};