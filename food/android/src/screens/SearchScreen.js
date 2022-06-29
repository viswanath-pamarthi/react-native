import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import Icon from "react-native-vector-icons/dist/FontAwesome";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    return (
        <View style={styles.viewStyle}>
            <SearchBar term={term}
                onTermChange={setTerm} //{/* shorthand for ->..(newterm) => { setTerm(newterm) }*/}
                onTermSubmit={() => searchApi(term)} />
            {errorMessage ? <Text >{errorMessage}</Text> : null}
            <Text> We have found {results.length}</Text>
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