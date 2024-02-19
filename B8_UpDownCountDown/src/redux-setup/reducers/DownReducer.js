const initState = {
    num : 10,
    is_playing: false,
}

const timeDownReducer = (state = initState,action)=>{

    switch(action.type){
        case "DOWN": return {...state,num: state.num-1,is_playing:true};
        case "STOP_DOWN": return{...state,num: state.num,is_playing:false}
        case "RESET_DOWN": return {num: 10, is_playing: false};
        
        default : return state;
    }
}

export default timeDownReducer;