import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { up, stop, reset, increase, resetAll } from "../redux-setup/reducers/UpReducer";
const TimeUpComponent = () => {
    const dispatch = useDispatch();
    const { second, minute, hours, is_playing } = useSelector((store) => store.UpReducer);



    useEffect(() => {
        const intervalID = setInterval(() => {
            if (second < 2) {
                if (is_playing) {
                    dispatch(up())
                }
                else {
                    setTimeout(() => {
                        return dispatch(stop())
                    }, 50)
                }
            }
            else if (second === 2 && minute === 2 && hours === 2) {
                dispatch(resetAll())
            }
            else {
                dispatch(increase())
            }

        }, 500)
        return () => {
            clearInterval(intervalID);
        }
    }, [second, minute, hours, is_playing])


    const onClick = (type) => {
        switch (type) {
            case "up": dispatch(up());
                break;
            case "stop_up": dispatch(stop());
                break;
            case "rs_up": dispatch(reset());
                break;

            default: break;
        }

    }
    return (
        <>
            <div className="col-lg-5 col-md-5 col-sm-8 col-8">
                <div className="timer bg-info" id="timer-up">
                    <p>
                        {hours < 10 ? `0${hours}` : hours}:
                        {minute < 10 ? `0${minute}` : minute}:
                        {second < 10 ? `0${second}` : second}
                    </p>
                    <button onClick={() => onClick(!is_playing ? "up" : "stop_up")} type="button" className="btn btn-dark">{is_playing ? "Stop" : "Up"}</button>
                    <button onClick={() => onClick("rs_up")} type="button" className="btn btn-dark">Reset</button>
                </div>
            </div>
        </>
    )
}

export default TimeUpComponent;