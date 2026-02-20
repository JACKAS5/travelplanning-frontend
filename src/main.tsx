import React from "react";
import ReactDOM from "react-dom/client";
import './styles/index.css';
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";

const clientId = "YOUR_GOOGLE_CLIENT_ID"; 

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
