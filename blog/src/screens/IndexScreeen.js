import React, { useContext } from "react";//UseContext hook is used to look at context object and  give us access to the data shared by the context provider
import { StyleSheet, View, Text, FlatList } from "react-native";
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
    const blogPosts = useContext(BlogContext);// useContext is getting the data from Blog provider
    console.log(blogPosts);
    return (
        <View>
            <Text>Index Screen  </Text>
            <FlatList
                data={blogPosts}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({ item }) => {
                    return (
                        <Text>{item.title}</Text>
                    );
                }}
            />
        </View>
    );
};


const styles = StyleSheet.create({

});


export default IndexScreen;