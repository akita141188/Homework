import React from "react";
import { Provider } from "react-redux";
import store from "./redux-setup/store";
import ButtonComponent from "./components/ButtonComponent";
import NumberComponent from "./components/NumberComponent";


const App = () => {

  const [count, setCount] = React.useState(60);
  const [intervalId, setIntervalId] = React.useState(null);

  const startCountdown = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }
    setIntervalId(setInterval(() => {
      setCount(count => count - 1);
    }, 1000));
  };

  const stopCountdown = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const nextNumber = () => {
    setCount(count + 1)
  }
  const prevNumber = () => {
    setCount(count - 1)
  }
  const resetCountdown = () => {
    setCount(60)
  }
  return (
    <Provider store={store}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 text-center">
            <div id="main">
              <NumberComponent
                count={count}
              />
              <ButtonComponent
                startCountdown={startCountdown}
                stopCountdown={stopCountdown}
                resetCountdown={resetCountdown}
                nextNumber={nextNumber}
                prevNumber={prevNumber}
              />
            </div>
          </div>
        </div>
      </div>
    </Provider>

  )
}

export default App;
