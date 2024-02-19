const initState = {
    num : 0,
    is_playing : false,
}

const timeUpReducer = (state = initState,action)=>{

    switch(action.type){
        case "UP": return {...state,num : state.num +1, is_playing:true};
        case "STOP_UP": return {...state,num:state.num, is_playing:false};
        case "RESET_UP" : return {num : 0,is_playing: false};
        
        default : return state;
    }
}

export default timeUpReducer;