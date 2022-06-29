import React, { useContext } from "react";//UseContext hook is used to look at context object and  give us access to the data shared by the context provider
import { StyleSheet, View, Text, FlatList, Button, TouchableOpacity } from "react-native";
import { Context as BlogContext, Provider } from "../context/BlogContext";//can create an alias for vairables if needed with as keyword
import Icon from "react-native-vector-icons/dist/Feather";

//Anything that talks about re render the app when data changes over time in react , we are always talking about State (creatting a state variable)
const IndexScreen = ({ navigation }) => {
    // console.log(props);
    //left hand side, array destructuring - javascript
    const { state, addBlogPost, deleteBlogPost } = useContext(BlogContext);// useContext is getting the data from Blog provider

    return (
        <View>
            <Button title="Add Post" onPress={addBlogPost} />
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('Show', { id: item.id });
                        }}>
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.title} - {item.id}</Text>
                                <TouchableOpacity onPress={() => {
                                    deleteBlogPost(item.id);
                                }}>
                                    <Icon name="trash" style={styles.icon} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderTopWidth: 1,
        borderColor: 'gray',
        paddingHorizontal: 10
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
});


export default IndexScreen;