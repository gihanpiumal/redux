import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Test = () => {
  const counter = useSelector((state) => state.counter);
  return <div>{counter}</div>;
};

export default Test;
