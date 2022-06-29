import React, { useContext } from "react";//UseContext hook is used to look at context object and  give us access to the data shared by the context provider
import { StyleSheet, View, Text } from "react-native";
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
    const value = useContext(BlogContext);

    return (
        <View>
            <Text>Index Screen  {value}</Text>
        </View>
    );
};


const styles = StyleSheet.create({

});


export default IndexScreen;