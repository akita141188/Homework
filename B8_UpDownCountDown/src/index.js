import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux-setup/store";

// App.js ( nhận các component)--> index.js --> index.html
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>

        <App />

    </Provider>

);