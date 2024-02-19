import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
const TimeUpComponent = () => {
    const dispatch = useDispatch();
    const {num,is_playing} = useSelector((store)=>store.timeUpReducer);

    useEffect(()=>{
        const intervalID = setInterval(()=>{
            if(is_playing){
                    dispatch({
                        type : "UP"
                    })
            }
            else{
                setTimeout(()=>{
                    return dispatch({
                        type: "STOP_UP"
                    })
                },50)
            }
        },1000)
        return ()=>{
            clearInterval(intervalID);
        }
    },[num,is_playing])


    const onClick = (type) => {
        switch (type) {
            case "up": dispatch({
                type: "UP"
            });
            break;
            case "stop_up": dispatch({
                type: "STOP_UP"
            });
            break;
            case "rs_up": dispatch({
                type: "RESET_UP"
            });
            break;

            default: break;
        }

    }
    return (
        <>
            <div className="col-lg-3 col-md-3 col-sm-8 col-8">
                <div className="timer bg-info" id="timer-up">
                    <p>{num}</p>
                    <button onClick={()=>onClick(!is_playing?"up":"stop_up")} type="button" className="btn btn-dark">{is_playing?"Stop":"Up"}</button>
                    <button onClick={()=>onClick("rs_up")} type="button" className="btn btn-dark">Reset</button>
                </div>
            </div>
        </>
    )
}

export default TimeUpComponent;