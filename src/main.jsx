import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./index.css";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./components/Login/Login.jsx";
import Home from "./components/Home/Home.jsx";
import LoginHelp from "./components/LoginHelp/LoginHelp.jsx";
import { Provider } from "react-redux";
import { Store } from "./store/Store.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route exact path="">
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/loginhelp" element={<LoginHelp />} />
      <Route path="/home" element={<Home />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <RouterProvider router={router} />
  </Provider>
);
