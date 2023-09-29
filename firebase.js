import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";
import {GoogleAuthProvider} from "firebase/auth"




const firebaseConfig = {
    apiKey: "AIzaSyB-jTnb98BzhVOvzzhHmVl9YkyDvXgzh3w",
    authDomain: "owplus-8d733.firebaseapp.com",
    projectId: "owplus-8d733",
    storageBucket: "owplus-8d733.appspot.com",
    messagingSenderId: "298580701028",
    appId: "1:298580701028:web:51d28da29dbc6ab9bfd471"
  };
  firebase.initializeApp(firebaseConfig);
  export const auth=firebase.auth();
  export const firestore=firebase.firestore()
  export const  provider=new GoogleAuthProvider()
  export const storage=firebase.storage()