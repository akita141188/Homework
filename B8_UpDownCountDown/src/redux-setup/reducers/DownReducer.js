import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    second: 3,
    minute: 3,
    hours: 3,
    is_playing: false,

}

const decreaseTime = (state) => {
    if (state.second === 0) {
        if (state.minute === 0) {
            return (
                state.second = 3,
                state.minute = 3,
                state.hours -= 1
            )
        }else{
            return(
                state.second = 3,
                state.minute -= 1
            )
        }
    }
};

const resetAllTime = (state) => {
    if (state.minute === 0 && state.second === 0 && state.hours === 0) {
        return (
            state.second = 3,
            state.minute = 3,
            state.hours = 3,
            state.is_playing = true
        )
    } else {
        return state;
    }
}

export const downReducer = createSlice({
    name: "downReducer",
    initialState,
    reducers: {
        down: (state, action) => {
            state.second -= 1;
            state.is_playing = true;
        },
        stop: (state, action) => {
            state.is_playing = false;
        },
        reset: (state, action) => {
            state.second = 3;
            state.minute = 3;
            state.hours = 3;
            state.is_playing = false;
        },
        decrease : (state,action)=>{
            decreaseTime(state);
        },
        resetAll : (state,action)=>{
            resetAllTime(state);
        }
    }
})

export const {down,stop,reset,decrease,resetAll} = downReducer.actions;
export default downReducer.reducer;

// const initState = {
//     second : 3,
//     minute : 3,
//     hours : 3,
//     is_playing: false,
// }

// const timeDownReducer = (state = initState,action)=>{

//     switch (action.type) {
//         case "DOWN": return { ...state, second: state.second - 1, minute: state.minute, hours: state.hours, is_playing: true };
//         case "DECREASE":
//             if (state.second === 0) {
//                 if (state.minute === 0) {
//                     return { ...state, second: 3, minute: 3, hours: state.hours - 1 }
//                 } else {
//                     return { ...state, second: 3, minute: state.minute - 1 };
//                 }
//             } else {
//                 return { ...state, second: state.second - 1 };
//             }
//         case "STOP_DOWN": return { ...state, second: state.second, minute: state.minute, hours: state.hours, is_playing: false };
//         case "RESET_DOWN": return { second: 3, minute: 3, hours: 3, is_playing: false };
//         case "RESET_ALL_DOWN":
//             if (state.minute === 0 && state.second === 0 && state.hours===0) {
//                 return { second: 3, minute: 3, hours:3, is_playing: true };
//             } else {
//                 return state;
//             }

//         default: return state;
//     }
// }

// export default timeDownReducer;