import React, { useEffect, useState } from "react";
import calculatorClass from "./classConstructor";

export default function Calc() {
  let [inputValue, setInputValue] = useState(0);
  let [prevValue, setPrevValue] = useState(null);
  let [check, setCheck] = useState(false);
  let [sign, setSign] = useState(null);
  const calcButtons = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, ","],
    ["/", "*", "-", "+", "="],
    ["AC", "+/-", "%"],
  ];

  useEffect(() => {
    console.log("Log ::: inputValue ;:::", inputValue);
    console.log("Log ::: prevValue :::", prevValue);
  });

  let calculate = new calculatorClass(sign, setSign);

  function handleClick(e) {
    if (+e.target.innerText && inputValue !== 0) {
      if (check) {
        if (inputValue === "0.") {
          setInputValue(+(inputValue + e.target.innerText));
        } else {
          setInputValue(+e.target.innerText);
        }
        setCheck(false);
      } else {
        setInputValue(+(inputValue += e.target.value));
      }
    } else if (e.target.innerText === "0") {
      if (inputValue.length > 0) {
        if (check) {
          setInputValue(+e.target.innerText);
          setCheck(false);
        } else {
          setInputValue(+(inputValue += e.target.value));
        }
      } else if (inputValue > 0 || inputValue < 0) {
        if (check) {
          setInputValue(+e.target.innerText);
          setCheck(false);
        } else {
          setInputValue(+(inputValue += e.target.value));
        }
      }
    } else if (+e.target.innerText && inputValue === 0) {
      if (check) {
        setInputValue(+e.target.innerText);
        setCheck(false);
      } else {
        setInputValue(+e.target.innerText);
      }
    }

    switch (e.target.value) {
      case "AC": {
        setInputValue(0);
        setCheck(check);
        setPrevValue(0);
        break;
      }
      case "+/-": {
        if (inputValue === 0) {
          break;
        }
        setInputValue(inputValue - 2 * inputValue);
        break;
      }
      case ",": {
        if (check) {
          setInputValue("0.");
        } else {
          setInputValue((inputValue += "."));
        }
        break;
      }
      case "%": {
        if (inputValue) {
          setInputValue(inputValue / 100);
        }
        break;
      }
      case "+": {
        calculate.add(
          check,
          setCheck,
          inputValue,
          setInputValue,
          prevValue,
          setPrevValue,
          sign,
          setSign
        );

        break;
      }
      case "-": {
        calculate.sub(
          setCheck,
          inputValue,
          setInputValue,
          prevValue,
          setPrevValue,
          sign,
          setSign
        );

        break;
      }
      case "*": {
        calculate.mult(
          setCheck,
          inputValue,
          setInputValue,
          prevValue,
          setPrevValue,
          sign,
          setSign
        );
        break;
      }
      case "/":
        {
          calculate.div(
            setCheck,
            inputValue,
            setInputValue,
            prevValue,
            setPrevValue,
            sign,
            setSign
          );
        }
        break;
      case "=": {
        calculate.equal(
          sign,
          prevValue,
          inputValue,
          setInputValue,
          setSign,
          setPrevValue
        );
      }
    }
  }

  return (
    <div className="calculator">
      <div className="display">{inputValue}</div>

      <div className="buttons">
        <div className="upper-buttons">
          {calcButtons[2].map((it, ind) => {
            return (
              <button
                onClick={(e) => handleClick(e)}
                className="upper-button"
                value={it}
                key={ind}
              >
                {it}
              </button>
            );
          })}
        </div>
        <div className="number-buttons">
          {calcButtons[0].map((it, ind) => {
            let css = "";
            if (it === 0) {
              css = "zero";
            }
            return (
              <button
                onClick={(e) => handleClick(e)}
                className={"number-button" + " " + css}
                value={it}
                key={ind}
              >
                {it}
              </button>
            );
          })}
        </div>
        <div className="right-buttons">
          {calcButtons[1].map((it, ind) => {
            return (
              <button
                onClick={(e) => handleClick(e)}
                className="right-button"
                value={it}
                key={ind}
              >
                {it}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
