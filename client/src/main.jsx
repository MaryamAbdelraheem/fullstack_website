import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-ajf4yrl342shon86.us.auth0.com"
    clientId="1OS4NYfaa4rFi2VoTpj1sl9S7Jqd3PY1"
    authorizationParams={{
      redirect_uri: "http://localhost:5173"
    }}
    audience="http://localhost:8000"
    scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
