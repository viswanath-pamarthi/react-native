//automated code for BlogContext.js and make it generic for holding the state
//when we export a plain function it is named with starting lowercase  character - createDataContext

import React, { useReducer } from "react";

//things change in the BlogContext.js as parameters
export default (reducer, actions, initialState) => {

    const Context = React.createContext();

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState);

        return <Context.Provider value={{ state: state }}>
            {children}
        </Context.Provider>
    }

    return { Context, Provider };
};