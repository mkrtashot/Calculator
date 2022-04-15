export default function math(sign, prev, curr, setCurr, setPrev) {
  switch (sign) {
    case "+": {
      console.log("Log ::: curr :::", curr);
      setCurr(curr + prev);
      setPrev(curr + prev);

      console.log("Log ::: prevIn :::", prev);
      break;
    }
    case "-": {
      console.log("Log ::: curr :::", curr);
      setCurr(prev - curr);
      setPrev(prev - curr);

      console.log("Log ::: prevIn :::", prev);
      break;
    }
    case "*": {
      setCurr(curr * prev);
      setPrev(curr);
      break;
    }
    case "/": {
      setCurr(prev / curr);
      setPrev(curr);
      break;
    }
  }
}
