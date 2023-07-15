import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBjf935atYEnzJvwtBU6-b-GyVcMgI05GM",
    authDomain: "iot-switchboard-9b443.firebaseapp.com",
    databaseURL: "https://iot-switchboard-9b443-default-rtdb.firebaseio.com",
    projectId: "iot-switchboard-9b443",
    storageBucket: "iot-switchboard-9b443.appspot.com",
    messagingSenderId: "53574015242",
    appId: "1:53574015242:web:689b59344e2e45bd1702f3",
    measurementId: "G-3S00EBS91R"
  };

  export const Firebase =  firebase.initializeApp(firebaseConfig)