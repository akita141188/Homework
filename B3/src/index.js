import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";

// App.js ( nhận các component)--> index.js --> index.html
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
 <App/>
);