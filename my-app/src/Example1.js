import React from "react";
import { createStore } from "redux";

const initialState = {
  age: 0,
};
const myReducer = (state = initialState, action) => {
  const newState = { ...state };
  if (action.type === "ADD") {
    newState.age += action.val;
  }
  if (action.type === "SUBSTRACT") {
    newState.age -= 1;
  }
  return newState;
};
const store = createStore(myReducer);
//state tracking like react or sass. Need to put it before dispatch
store.subscribe(() => {
  console.log(
    `state tracking/subscribe,
    look at how many times display 
    it's base on # of dispatch use ${store.getState()} `
  );
});
store.dispatch({ type: "ADD", val: 100 });
store.dispatch({ type: "SUBSTRACT" });
console.log(store.getState());

function Example1() {
  return <div>See console</div>;
}

export default Example1;
