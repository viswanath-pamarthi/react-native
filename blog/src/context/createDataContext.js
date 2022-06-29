//automated code for BlogContext.js and make it generic for holding the state
//when we export a plain function it is named with starting lowercase  character - createDataContext

import React, { useReducer } from "react";

//things change in the BlogContext.js as parameters
export default (reducer, actions, initialState) => {

    const Context = React.createContext();

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState);

        //actions === {addBlogPost: (displatch) => {return ()=>{}}}

        const boundActions = {};

        //loop through the actions and fetch the fuction passed and pass it dispatch, so it can get access to dispatch function
        for (let key in actions) {
            //key === 'addBlogPost'
            boundActions[key] = actions[key](dispatch);
        }

        return <Context.Provider value={{ state: state, ...boundActions }}>
            {children}
        </Context.Provider>
    }

    return { Context, Provider };
};