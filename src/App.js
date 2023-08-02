import { useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import "./App.css";
import { auth } from "./firebase";
import Login from "./login";
import Hero from "./Hero";

function App() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const handleLogin = () => {
    clearError();

    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log("user >>", user);
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
          default:
            // Handle other login errors here if needed
            console.error("Login error:", err);
        }
      });
  };

  const handleSignup = () => {
    clearError();
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log("New user registered >>", user);
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
          default:
            // Handle other signup errors here if needed
            console.error("Signup error:", err);
        }
      });
  };

  const handleLogout = () => {
    signOut(auth);
  };

  const authListener = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        cleanInput();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  const cleanInput = () => {
    setEmail("");
    setPassword("");
  };

  const clearError = () => {
    setEmailError("");
    setPasswordError("");
  };

  useEffect(() => {
    authListener();
  }, [authListener]);

  return (
    <div className="App">
      {user ? (
        <Hero handleLogout={handleLogout} emailName={email} />
      ) : (
        <Login
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
        />
      )}
    </div>
  );
}

export default App;
