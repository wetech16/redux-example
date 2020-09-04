import React from 'react'
import {createStore } from 'redux'

export default function Example2() {
    const reducer = (state, action) => {
        if(action.type === "Peace"){
            return action.payload
        }
        return state;
    }
    const store = createStore(reducer, "Peace");
    store.subscribe(() => {
        console.log("Ex2: Store is Now", store.getState());
    })
    store.dispatch({type: "ATTACK", payload: "Not PeaPeace"})


    return (
        <div>
            Example2 See console
        </div>
    )
}
