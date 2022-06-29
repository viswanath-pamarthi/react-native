import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Icon from "react-native-vector-icons/dist/Feather";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {

    return (
        <View style={styles.backgroundStyle}>
            <Icon style={styles.iconStyle} name="search" size={30} />
            <TextInput style={styles.inputStyle}
                placeholder="Search"
                autoCorrect={false}
                autoCapitalize='none'
                value={term}
                onChangeText={(newTerm) => { onTermChange(newTerm) }}
                onEndEditing={onTermSubmit} />{/*shorthand of passing function*/}
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: 'rgb(240,236,238)',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,//similar to size in Icon
        alignSelf: "center",
        marginHorizontal: 15
    }
});


export default SearchBar;