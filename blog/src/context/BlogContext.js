import React, { Children } from "react";

//Using contexts to avoid pass a chain of data from parent to child screens( or a chind of child screens), with context(global state) we can pass the data to any child in deep navigation from context- here blogpovider
//we will wrap app with blogContext here

const BlogContext = React.createContext();

/*
example for children
----> here in similar syntax App component passes children:<Text>Hi there</Text> , the content inside CustomComponent tag is passed as a prop called "children"
const App=()=>{
    return <CustomComponent>
        <Text>Hi there</Text> 
    </CustomComponent>
}

*/
//we are not using export default, just export(a named export). we will do expor default for BlogContext
//So inorder to import BlogProvider we need to use curly braces like import {BlogProvider}
export const BlogProvider = ({ children }) => {
    // return <BlogContext.Provider value={5}> this value= 5 with provider can be shared with with deep nested navigated child in the navigation stack. in other ways provider is the source for data
    return <BlogContext.Provider value={5}>
        {children}
    </BlogContext.Provider>
};

export default BlogContext;