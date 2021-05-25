import { auth } from "./firebase";
const API = "http://localhost:3333";
//const API = "https://stripe-payment-server-app.herokuapp.com";
// const API = "https://stripe-backend-mqbl23xfga-uc.a.run.app";

/**
 * A helper function to fetch data from your API.
 */
export async function fetchFromAPI(endpointURL, opts) {
  const { method, body } = { method: "POST", body: null, ...opts };

  const user = auth.currentUser;
  const token = user && (await user.getIdToken());
  console.log(token);

  const res = await fetch(`${API}/${endpointURL}`, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });

  return res.json();
}
