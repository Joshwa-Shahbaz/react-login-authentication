import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfs93hmIqKj4mhuMEa0O42eXVZPCFcVBE",
  authDomain: "login-2801a.firebaseapp.com",
  projectId: "login-2801a",
  storageBucket: "login-2801a.appspot.com",
  messagingSenderId: "6238019289",
  appId: "1:6238019289:web:a64f66f5a10e7c8cbfa8c8",
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
