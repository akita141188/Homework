const initState = {
    second: 0,
    minute: 0,
    hours: 0,
    is_playing: false,
}

const timeUpReducer = (state = initState, action) => {

    switch (action.type) {
        case "UP": return { ...state, second: state.second + 1, minute: state.minute, hours: state.hours, is_playing: true };
        case "INCREASE":
            if (state.second === 2) {
                if (state.minute === 2) {
                    return { ...state, second: 0, minute: 0, hours: state.hours + 1 }
                } else {
                    return { ...state, second: 0, minute: state.minute + 1 };
                }
            } else {
                return { ...state, second: state.second + 1 };
            }
        case "STOP_UP": return { ...state, second: state.second, minute: state.minute, hours: state.hours, is_playing: false };
        case "RESET_UP": return { second: 0, minute: 0, hours: 0, is_playing: false };
        case "RESET_ALL_UP":
            if (state.minute === 2 && state.second === 2 && state.hours===2) {
                return { second: 0, minute: 0, hours:0, is_playing: true };
            } else {
                return state;
            }

        default: return state;
    }
}

export default timeUpReducer;