import { configureStore } from "@reduxjs/toolkit";
import upReducer from "./reducers/UpReducer";
import downReducer from "./reducers/DownReducer";



const store = configureStore({
    reducer : {
        UpReducer : upReducer,
        DownReducer : downReducer,
    }
})

export default store;

// import { createStore } from "redux";
// import reducers from "./reducers";

// const store = createStore(reducers);

// export default store;