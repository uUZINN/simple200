import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBt93aEK2BueMcrXN402iWICEQZjbarpZo",
    authDomain: "react-simple100.firebaseapp.com",
    projectId: "react-simple100",
    storageBucket: "react-simple100.appspot.com",
    messagingSenderId: "1076356765959",
    appId: "1:1076356765959:web:f1eb926096e5544185cda2",
    measurementId: "G-QQT1D2R70C"
};

firebase.initializeApp(firebaseConfig);

export default firebase;