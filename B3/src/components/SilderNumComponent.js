const SliderNumComponent = ({updateImg1,updateImg2,updateImg3}) => {
    return (
        <>
            <p id="slide-num">
                <a onClick={updateImg1} href="#">1</a>
                <a  onClick={updateImg2} href="#">2</a>
                <a  onClick={updateImg3} href="#">3</a>
            </p>
            <div id="slide-num" >
            <button  onClick={updateImg1}>1</button>
            <button onClick={updateImg2}>2</button>
            <button onClick={updateImg3}>3</button>
            </div>

            {/* <div id="slide-num" >
        <img src= "images/banner-1.jpg" />
        <img src= "images/banner-2.jpg" />
        <img src= "images/banner-3.jpg" />
        <img src= "images/banner-1.jpg" />
            </div> */}

        </>
    )
}

export default SliderNumComponent;