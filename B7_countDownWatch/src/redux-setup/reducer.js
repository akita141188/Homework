import React from "react"

const defaultState = {
    num : 120,
}
const reducer = (state = defaultState,action)=>{

    switch(action.type){
        case "get_number": return {...state,num:Math.round(Math.random() * 100)}
        case "reset": return {num:0}
        case "next_number": return {...state,num:state.num+1}

       
        default: return state;

    }

}

export default reducer;