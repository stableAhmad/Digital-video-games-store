import React, { createContext, useState } from "react";

export const CounterContext = createContext(0);

export default function CounterContextProvider(props) {
    const [counter, setCounter] = useState(10);





    function increment() {
        setCounter(counter + 1)
    }


    function decrement() {
        setCounter(counter - 1)
    }



    return (
        <CounterContext.Provider value={{ counter, increment, decrement }}>
            {props.children}
        </CounterContext.Provider>
    );
}
