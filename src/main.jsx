import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./components/routes/Routes.jsx";
import AuthContext from "./components/context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContext>
      <RouterProvider router={routes}>
        <App />
      </RouterProvider>
    </AuthContext>
  </React.StrictMode>
);
