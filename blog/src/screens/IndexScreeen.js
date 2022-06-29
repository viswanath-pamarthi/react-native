import React, { useContext } from "react";//UseContext hook is used to look at context object and  give us access to the data shared by the context provider
import { StyleSheet, View, Text, FlatList, Button } from "react-native";
import BlogContext from "../context/BlogContext";

//Anything that talks about re render the app when data changes over time in react , we are always talking about State (creatting a state variable)
const IndexScreen = () => {
    //left hand side, array destructuring - javascript
    const { data, addBlogPost } = useContext(BlogContext);// useContext is getting the data from Blog provider

    return (
        <View>
            <Text>Index Screen  </Text>
            <Button title="Add Post" onPress={addBlogPost} />
            <FlatList
                data={data}
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