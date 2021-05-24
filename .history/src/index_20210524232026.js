import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

export const stripePromise = loadStripe(
  "pk_test_51IuiHnLMgvU1cp6VcGOxdYgTSfcOEiSG1RqeoyZf3Wzw8u9fV6lL41HprkeBFVrRbkohbjQP4p9H5B1WSnqwz1qP00HjEpxU7u"
);

ReactDOM.render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </React.StrictMode>,
  document.getElementById("root")
);
