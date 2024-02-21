import React from "react";
import TimeUpComponent from "./components/TimUpComponent";
import TimeDownComponent from "./components/TimeDownComponent";




const App = () => {


  return (
<div className="container">
        <div className="row justify-content-center">
          <TimeUpComponent />
          <TimeDownComponent />
        </div>
      </div>
  )
}

export default App;
