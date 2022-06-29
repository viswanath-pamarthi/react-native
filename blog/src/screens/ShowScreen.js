import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import Icon from "react-native-vector-icons/dist/Feather";

const ShowScreen = ({ navigation, route }) => {
    const { id } = route.params;
    const { state } = useContext(Context);
    // console.log(navigation);

    const blogPost = state.find((blogPost) =>
        blogPost.id === id
    );

    return <View>
        <Text>{blogPost.title}</Text>
        <Text>{blogPost.content}</Text>
    </View>
};

// ShowScreen.navigationOptions = ({ navigation }) => {
//     return {
//         title: "Index Screen",
//         headerRight: () => {
//             return (
//                 < TouchableOpacity onPress={() => navigation.navigate('Create')}>
//                     <Icon name="plus" size={30} />
//                 </TouchableOpacity>
//             )
//         }
//     };
// };
const styles = StyleSheet.create({

});

export default ShowScreen;