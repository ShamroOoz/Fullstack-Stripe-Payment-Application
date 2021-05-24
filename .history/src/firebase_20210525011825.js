import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyAVcqUYZS71DwMqGD32dX6dKtDPpfU-ahY",
  authDomain: "stripe-payment-3dadf.firebaseapp.com",
  projectId: "stripe-payment-3dadf",
  storageBucket: "stripe-payment-3dadf.appspot.com",
  messagingSenderId: "125800756748",
  appId: "1:125800756748:web:6c50be00c1487b528fe029",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
