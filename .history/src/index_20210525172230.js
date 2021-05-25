import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { FirebaseAppProvider } from "reactfire";

export const stripePromise = loadStripe(
  "pk_test_51IuiHnLMgvU1cp6VcGOxdYgTSfcOEiSG1RqeoyZf3Wzw8u9fV6lL41HprkeBFVrRbkohbjQP4p9H5B1WSnqwz1qP00HjEpxU7u"
);

export const firebaseConfig = {
  apiKey: "AIzaSyAVcqUYZS71DwMqGD32dX6dKtDPpfU-ahY",
  authDomain: "stripe-payment-3dadf.firebaseapp.com",
  projectId: "stripe-payment-3dadf",
  storageBucket: "stripe-payment-3dadf.appspot.com",
  messagingSenderId: "125800756748",
  appId: "1:125800756748:web:6c50be00c1487b528fe029",
};

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
