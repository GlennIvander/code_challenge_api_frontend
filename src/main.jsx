import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CookiesProvider defaultSetOptions={{ path: "/" }}>
        <App />
      </CookiesProvider>
    </BrowserRouter>
  </StrictMode>
);
