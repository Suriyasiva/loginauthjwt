import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBANR89VywDVd41DVnKP0mkl7PHrv_C2C8",
  authDomain: "login-gauth.firebaseapp.com",
  projectId: "login-gauth",
  storageBucket: "login-gauth.appspot.com",
  messagingSenderId: "463627862400",
  appId: "1:463627862400:web:5a4766a2205fcf8ef74165",
  measurementId: "G-Z5CBTWC15D",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInGoogle = () => {
  signInWithPopup(auth, provider)
    .then((res) => {
      console.log(res);
      const name = res.user.displayName;
      const email = res.user.email;
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("email", email);
    })
    .catch((error) => {
      console.log(error);
    });
};
