import { useState } from "react";
import CustomButton from "../components/customButton/CustomButton";
import "./counterApp.style.css";

const CounterApp = () => {
    const [count, setCount] = useState(0);

    const devideHandler = () => {
      setCount(count / 2);
    }

  const decreementHandler = () => {
    setCount(count * 2);
    };

  const plusHandler = () => {
    setCount(count + 10);
    };
    
  const minusHandler = () => {
    setCount(count - 10);
  };
  
  const resetHandler = () => {
    setCount(0);
  }

    return (
      <div className="container">
        <div className="counter-box">
          <CustomButton onClick={plusHandler} textData="+10" />
          <CustomButton onClick={decreementHandler} textData="*2" />
          <h1>{count}</h1>
          <CustomButton onClick={devideHandler} textData="/2" />
          <CustomButton onClick={minusHandler} textData="-10" />
          <CustomButton onClick={resetHandler} textData="Reset" />
        </div>
      </div>
    );
}

export default CounterApp;