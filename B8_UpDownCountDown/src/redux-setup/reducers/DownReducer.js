const initState = {
    second : 3,
    minute : 3,
    hours : 3,
    is_playing: false,
}

const timeDownReducer = (state = initState,action)=>{

    switch (action.type) {
        case "DOWN": return { ...state, second: state.second - 1, minute: state.minute, hours: state.hours, is_playing: true };
        case "DECREASE":
            if (state.second === 0) {
                if (state.minute === 0) {
                    return { ...state, second: 3, minute: 3, hours: state.hours - 1 }
                } else {
                    return { ...state, second: 3, minute: state.minute - 1 };
                }
            } else {
                return { ...state, second: state.second - 1 };
            }
        case "STOP_DOWN": return { ...state, second: state.second, minute: state.minute, hours: state.hours, is_playing: false };
        case "RESET_DOWN": return { second: 3, minute: 3, hours: 3, is_playing: false };
        case "RESET_ALL_DOWN":
            if (state.minute === 0 && state.second === 0 && state.hours===0) {
                return { second: 3, minute: 3, hours:3, is_playing: true };
            } else {
                return state;
            }

        default: return state;
    }
}

export default timeDownReducer;