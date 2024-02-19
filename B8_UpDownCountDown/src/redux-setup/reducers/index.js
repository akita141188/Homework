import { combineReducers } from "redux";
import timeDownReducer from "./DownReducer";
import timeUpReducer from "./UpReducer";

export default combineReducers({
    timeUpReducer: timeUpReducer,
    timeDownReducer: timeDownReducer
});