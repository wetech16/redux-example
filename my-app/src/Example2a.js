import React from 'react'
import {createStore } from 'redux'

export default function Example2a () {
    const reducer = (state, action) => {
        if(action.type === "Peace"){
            return action.payload
        }
        if(action.type === "ATTACK"){
            return action.payload
        }
        if(action.type === "GREEN"){
            return action.payload
        }
        return state;
    }
    const store = createStore(reducer, "Peace");
    store.subscribe(() => {
        console.log("Ex2: Store is Now", store.getState());
    })
    store.dispatch({type: "ATTACK", payload: "Its ATTACK"})
    store.dispatch({type: "GREEN", payload: "Its GREEN"})


    return (
        <div>
            Example2 See console
        </div>
    )
}