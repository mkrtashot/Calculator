import { useState } from "react";
import "./App.css";
import Calc from "./Calc";

function App() {
  let [forTimes, setForTimes] = useState([]);
  function buttonHandler() {
    let arr = [];
    setForTimes([...forTimes, arr]);
  }
  return (
    <div>
      <button onClick={buttonHandler}>+</button>
      <div className="calculators-part">
        {forTimes.map((it, ind) => {
          return (
            <div key={ind} className="calc">
              <Calc />;
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
