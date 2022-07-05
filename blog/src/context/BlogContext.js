import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

//Using contexts to avoid pass a chain of data from parent to child screens( or a chind of child screens), with context(global state) we can pass the data to any child in deep navigation from context- here blogpovider
//we will wrap app with blogContext here

// const BlogContext = React.createContext();
const blogReducer = (state, action) => {

    switch (action.type) {
        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.payload);
        case 'add_blogpost':
            return [...state, {
                id: Math.floor(Math.random() * 99999),
                title: action.payload.title,
                content: action.payload.content
            }];
        case 'update_blogpost':
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id ? action.payload : blogPost;
            });
        case 'get_blogposts':
            // console.log(action.payload);
            return action.payload;
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
/*export const BlogProvider = ({ children }) => {

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
};*/

const getBlogPosts = dispatch => {

    return async () => {
        const response = await jsonServer.get('/blogposts');
        // console.log(`This is the return data: ${response.data}`);
        dispatch({ type: 'get_blogposts', payload: response.data })
    };
};


const addBlogPost = (dispatch) => {
    // setBlogPost([...blogPosts, { title: `Blog Post #${blogPosts.length + 1}` }])
    return async (title, content, callback) => {
        try {
            await jsonServer.post('/blogposts', {
                title: title,
                content: content
            });
            // await axio.post('endpoint, title, content)//can do a service call like this
            // dispatch({ type: 'add_blogpost', payload: { title: title, content: content } });// call dispatch and then call navigate to previous screen when no error
            if (callback)
                callback();
        }
        catch (e) {

        }

    };
}

const deleteBlogPost = (dispatch) => {

    return async (id) => {
        await jsonServer.delete(`/blogposts/${id}`);
        dispatch({ type: 'delete_blogpost', payload: id });
    };
};

const updateBlogPost = (dispatch) => {
    return async (id, title, content, callback) => {
        await jsonServer.put(`/blogposts/${id}`, { title: title, content: content })
        dispatch({
            type: "update_blogpost",
            payload: {
                id: id,
                title: title,
                content: content
            }
        });
        if (callback)
            callback();
    };
}

//exporting named variables, COntext and provider
export const { Context, Provider } = createDataContext(blogReducer,
    {
        addBlogPost: addBlogPost, //can be written just {addBlogPost}
        deleteBlogPost,
        updateBlogPost,
        getBlogPosts
    },
    [])
// export default BlogContext;