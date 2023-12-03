import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "../src/store";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";

// styles css
import "./styles/swiper-bundle.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="680966484762-r52v7ufhc3oh7g5h3i0j7qmg4e9uuub2.apps.googleusercontent.com">
      <Provider store={store}>
        {" "}
        <App />
      </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
