import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation, route }) => {
    const { id } = route.params;
    const { state, updateBlogPost } = useContext(Context);

    const blogPost = state.find((blogPost) =>
        blogPost.id === id
    );

    return <BlogPostForm onSubmit={(title, content) => {
        updateBlogPost(id, title, content, () => navigation.pop());
    }}
        initialValues={
            {
                title: blogPost.title,
                content: blogPost.content
            }
        } />
};

const styles = ({

});


export default EditScreen;