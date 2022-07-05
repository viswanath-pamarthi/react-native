import React, { useContext, useEffect } from "react";//UseContext hook is used to look at context object and  give us access to the data shared by the context provider
import { StyleSheet, View, Text, FlatList, Button, TouchableOpacity } from "react-native";
import { Context as BlogContext, Provider } from "../context/BlogContext";//can create an alias for vairables if needed with as keyword
import Icon from "react-native-vector-icons/dist/Feather";

//Anything that talks about re render the app when data changes over time in react , we are always talking about State (creatting a state variable)
const IndexScreen = ({ navigation }) => {

    //left hand side, array destructuring - javascript
    const { state, addBlogPost, deleteBlogPost, getBlogPosts } = useContext(BlogContext);// useContext is getting the data from Blog provider

    useEffect(() => {
        //First load fetch data
        console.log(getBlogPosts());
        console.log('In useEffect');

        //addlistener returns a listener, listener needs to be cleaned after else would lead to memory leaks with dangling listeners when the screen is onmounted or no longer displayed
        const unsubscribe = navigation.addListener('focus', () => {
            // console.log('In listener');
            getBlogPosts();
            //console.log(getBlogPosts());//call getBlogPosts whenever the IndexScreen is focused again
        });

        //if we return a function in useEffect this is called when IndexScreen is unmounted or destroyed or no longer displayed, (not when still in the navigation stack )
        // return () => {
        //     //do any clean up here
        //     console.log('unsubscribe listener');
        //     listener();
        //     //tell react that it don't need to tell us about didFocus event now
        //     // listener.removeListener();
        // };

        return unsubscribe;//return this to unsubscribe from the focus listener

    }, []);

    return (
        <View>
            <FlatList
                data={state}
                // keyExtractor={(item, index) => item.id}
                key={(item) => item.id}
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

// IndexScreen.navigationOptions = ({ navigation }) => {
//     return {
//         headerRight: () => (
//             <TouchableOpacity onPress={() => navigation.navigate('Create')}>
//                 <Icon name="md-heart" size={30} style={{ color: 'green' }} />
//             </TouchableOpacity>
//         ),
//     };
// };

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