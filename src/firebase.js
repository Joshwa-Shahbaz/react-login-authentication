import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDfs93hmIqKj4mhuMEa0O42eXVZPCFcVBE",
  authDomain: "login-2801a.firebaseapp.com",
  projectId: "login-2801a",
  storageBucket: "login-2801a.appspot.com",
  messagingSenderId: "6238019289",
  appId: "1:6238019289:web:a64f66f5a10e7c8cbfa8c8",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
