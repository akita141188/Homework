import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { down, stop, reset, decrease, resetAll } from "../redux-setup/reducers/DownReducer";

const TimeDownComponent = () => {
    const dispatch = useDispatch();
    const { second, minute, hours, is_playing } = useSelector((store) => store.DownReducer)

    useEffect(() => {
        const intervalID = setInterval(() => {
            if (second > 0) {
                if (is_playing) { dispatch(down()) }
                else {
                    setTimeout(() => {
                        return dispatch(stop())
                    }, 50)
                }
            }
            else if (second === 0 && minute === 0 && hours === 0) {
                dispatch(resetAll())
            }
            else {
                dispatch(decrease())
            }

        }, 500)
        return () => {
            clearInterval(intervalID);
        }
    }, [second, minute, hours, is_playing])

    const onClick = (type) => {
        switch (type) {
            case "down": dispatch(down());
                break;
            case "stop_down": dispatch(stop());
                break;
            case "rs_down": dispatch(reset());
                break;

            default: break;
        }
    }
    return (
        <>
            <div className="col-lg-5 col-md-5 col-sm-8 col-8">
                <div className="timer bg-danger" id="timer-down">
                    <p>
                        {hours < 10 ? `0${hours}` : hours}:
                        {minute < 10 ? `0${minute}` : minute}:
                        {second < 10 ? `0${second}` : second}
                    </p>
                    <button onClick={() => onClick(!is_playing ? "down" : "stop_down")} type="button" className="btn btn-dark">{is_playing ? "Stop" : "Down"}</button>
                    <button onClick={() => onClick("rs_down")} type="button" className="btn btn-dark">Reset</button>
                </div>
            </div>
        </>
    )
}

export default TimeDownComponent;