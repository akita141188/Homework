import React from "react";
const ButtonComponent = ({startCountdown,stopCountdown,resetCountdown,nextNumber,prevNumber}) => {
    return (
        <>
            <div>
                <button onClick={startCountdown}>Start</button>
                <button onClick={stopCountdown}>Stop</button>
                <button onClick={resetCountdown}>reset</button>
                <button onClick={nextNumber}>next</button>
                <button onClick={prevNumber}>prev</button>
            </div>
        </>
    )
}

export default ButtonComponent;