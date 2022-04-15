import math from "./math";

export default class calculatorClass {
  constructor(sign, setSign) {
    this.sign = sign;
    this.setSign = setSign;
    this.classValue = 0;
  }

  add(check, setCheck, inputValue, setInputValue, prevValue, setPrevValue) {
    if (prevValue) {
      math(this.sign, prevValue, inputValue, setInputValue, setPrevValue);
      setPrevValue(inputValue + prevValue);
      this.setSign("+");
      console.log("Log ::: prevValue :::", prevValue);
    } else {
      setPrevValue(inputValue);
      this.setSign("+");
    }
    setCheck(true);
  }
  sub(setCheck, inputValue, setInputValue, prevValue, setPrevValue) {
    if (prevValue) {
      math(this.sign, prevValue, inputValue, setInputValue, setPrevValue);
      setPrevValue(inputValue + prevValue);
      this.setSign("-");
      console.log("Log ::: prevValue :::", prevValue);
    } else {
      setPrevValue(inputValue);
      this.setSign("-");
    }
    setCheck(true);
  }
  mult(
    setCheck,
    inputValue,
    setInputValue,
    prevValue,
    setPrevValue,
    sign,
    setSign
  ) {
    if (prevValue) {
      math(sign, prevValue, inputValue, setInputValue, setPrevValue);
      setInputValue((inputValue *= prevValue));
      setPrevValue(inputValue);
      setSign("*");
    } else {
      setPrevValue(inputValue);
      setSign("*");
    }
    setCheck(true);
  }
  div(
    setCheck,
    inputValue,
    setInputValue,
    prevValue,
    setPrevValue,
    sign,
    setSign
  ) {
    if (prevValue) {
      math(sign, prevValue, inputValue, setInputValue, setPrevValue);
      setInputValue((inputValue = prevValue / inputValue));
      setPrevValue(inputValue);
      setSign("/");
    } else {
      setPrevValue(inputValue);
      setSign("/");
    }
    setCheck(true);
  }
  equal(sign, prevValue, inputValue, setInputValue, setSign, setPrevValue) {
    math(sign, prevValue, inputValue, setInputValue, setPrevValue);
    setSign(null);
    setPrevValue(null);
  }
}
