import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";


// const App = () => {

//     const [data, setData] = React.useState(true);

//     const onClickData = () => setData(!data)
//     React.useEffect(() => {
//         setTimeout(() => {
//             alert("didmount");
//         }, 1000)
//     }, [])
//     React.useEffect(() => {
//         if (!data) {
//             console.log("didupdate");
//             return setData(!data);
//         }
//     }, [data])
//     return <button onClick={onClickData}>Action</button>
// }

// App.js ( nhận các component)--> index.js --> index.html
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <App />
);