import firebase from "firebase";

  const firebaseConfig = {
    apiKey: "AIzaSyDm0ghpiqsLy9tSrbXj2xGc6os3Unt1GiI",
    authDomain: "ibobatakaigi-with-to.firebaseapp.com",
    projectId: "ibobatakaigi-with-to",
    storageBucket: "ibobatakaigi-with-to.appspot.com",
    messagingSenderId: "56346847743",
    appId: "1:56346847743:web:fa4695e501e9285f169fca"
  };

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messageRef = database.ref('messages');

export const pushMessage =({name,text})=>{
    messageRef.push({name,text})
};
