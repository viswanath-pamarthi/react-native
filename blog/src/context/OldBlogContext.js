import React, { useReducer } from "react";

//Using contexts to avoid pass a chain of data from parent to child screens( or a chind of child screens), with context(global state) we can pass the data to any child in deep navigation from context- here blogpovider
//we will wrap app with blogContext here

const BlogContext = React.createContext();
const blogReducer = (state, action) => {

    switch (action.type) {
        case 'add_blogpost':
            return [...state, { title: `Blog Post #${state.length + 1}` }];
        default:
            return state;
    }
};
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
export const BlogProvider1 = ({ children }) => {

    const [blogPosts, dispatch] = useReducer(blogReducer, []);//useReducer will always returns state here blogPosts
    // const blogPosts = [
    //     { title: 'Blog Post #1' },
    //     { title: 'Blog Post #2' }
    // ];

    //can also create  const editBlogPost = () => {, or to delete a post const addBlogPost = () => {, instead we can add a useReducer(this is a switch) hook to improve

    // const [blogPosts, setBlogPost] = useState([]);
    //once addBlogPost(call back function) the blog posts are changed in useState/state variable, then Blog provider gets re render that makes application to rerender and it refreshes the list of blog posts sent to context and to index screen and to flat list 
    const addBlogPost = () => {
        // setBlogPost([...blogPosts, { title: `Blog Post #${blogPosts.length + 1}` }])
        dispatch({ type: 'add_blogpost' });
    }

    // return <BlogContext.Provider value={5}> this value= 5 with provider can be shared with with deep nested navigated child in the navigation stack. in other ways provider is the source for data
    return <BlogContext.Provider value={{
        data: blogPosts,
        addBlogPost: addBlogPost//short hand is jus addBlogPost as key and value cariable are same name
    }}>
        {children}
    </BlogContext.Provider>
};

export default BlogContext1;