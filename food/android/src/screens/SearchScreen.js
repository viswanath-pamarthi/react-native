import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
// import { Icon } from "react-native-vector-icons/Icon";
import SearchBar from "../components/SearchBar";
// import { Icon } from "react-native-vector-icons/Feather"
import Icon from "react-native-vector-icons/dist/FontAwesome";
const SearchScreen = () => {
    const [term, setTerm] = useState('');

    return (
        <View style={styles.viewStyle}>
            <SearchBar term={term}
                onTermChange={(newterm) => { setTerm(newterm) }}
                onTermSubmit={() => { }} />
            {/* <Icon name="search" size={30} > */}
            <Text >Search Screen</Text>
            {/* </Icon> */}
            <Text>{term}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        // borderWidth: 3,
        // borderColor: 'black'
        backgroundColor: 'white',
        flex: 1
    },
    textStyle: {
        borderWidth: 10,
        borderColor: 'red',
        marginVertical: 20,
        marginHorizontal: 20

    }
});

export default SearchScreen;