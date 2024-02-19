import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const TimeDownComponent = () => {
    const dispatch = useDispatch();
    const {num,is_playing} = useSelector((store)=>store.timeDownReducer)

    useEffect(()=>{
        const intervalID = setInterval(()=>{
            if(is_playing){
                    dispatch({
                        type : "DOWN"
                    })
            }
            else{
                setTimeout(()=>{
                    return dispatch({
                        type: "STOP_DOWN"
                    })
                },50)
            }
        },1000)
        return ()=>{
            clearInterval(intervalID);
        }
    },[num,is_playing,dispatch])

    const onClick = (type) => {
        switch (type) {
            case "down": dispatch({
                type: "DOWN"
            });
            break;
            case "stop_down": dispatch({
                type: "STOP_DOWN"
            });
            break;
            case "rs_down": dispatch({
                type: "RESET_DOWN"
            });
            break;

            default: break;
        }
    }
    return (
        <>
            <div className="col-lg-3 col-md-3 col-sm-8 col-8">
                <div className="timer bg-danger" id="timer-down">
                    <p>{num}</p>
                    <button onClick={()=>onClick(!is_playing?"down":"stop_down")}  type="button" className="btn btn-dark">{is_playing?"Stop":"Down"}</button>
                    <button onClick={()=>onClick("rs_down")} type="button" className="btn btn-dark">Reset</button>
                </div>
            </div>
        </>
    )
}

export default TimeDownComponent;