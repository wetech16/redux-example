import React from "react";
import { createStore } from "redux";

const initialState = {
  age: 21,
};
const myReducer = (state = initialState, action) => {
  const newState = { ...state };
  if (action.type === "ADD") {
    newState.age += 1;
  }
  if (action.type === "SUBSTRACT") {
    newState.age += 1;
  }
  return newState;
};
const store = createStore(myReducer);
store.dispatch({ type: "ADD" });
store.dispatch({ type: "SUBSTRACT" });
console.log(store.getState());

function Example1() {
  return <div>See console</div>;
}

export default Example1;
