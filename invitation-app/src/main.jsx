import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout/index.js";

const url = "http://localhost:8080"; //TODO:: url 설정 어디서?

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Routes>
      <Route path="/" element={<Layout baseURL={url} />}></Route>
    </Routes>
  </React.StrictMode>,
);
