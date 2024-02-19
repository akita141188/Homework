import React from "react";
import { Provider } from "react-redux";
import store from "./redux-setup/store";
import TimeUpComponent from "./components/TimUpComponent";
import TimeDownComponent from "./components/TimeDownComponent";




const App = () => {


  return (
<Provider store={store} >
<div className="container">
        <div className="row justify-content-center">
          <TimeUpComponent />
          <TimeDownComponent />
        </div>
      </div>
</Provider>

  )
}

export default App;
