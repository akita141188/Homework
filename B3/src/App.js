import React from "react";
import SliderNumComponent from "./components/SilderNumComponent";
import SilderComponent from "./components/SilderComponent";

const App = () => {
  const [urlImg,setUrlImg] = React.useState("images/banner-1.jpg");
  const updateImg1 = ()=> setUrlImg("images/banner-1.jpg");
  const updateImg2 = ()=> setUrlImg("images/banner-2.jpg");
  const updateImg3 = ()=> setUrlImg("images/banner-3.jpg");


  return (
    <>


      <div id="slide">
        <SilderComponent urlImg = {urlImg} />
        <SliderNumComponent 
        updateImg1={updateImg1}
        updateImg2={updateImg2}
        updateImg3={updateImg3}  />
      </div>

    </>
  )
}

export default App;
