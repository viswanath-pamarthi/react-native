import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import Icon from "react-native-vector-icons/dist/FontAwesome";
import yelp from "../api/yelp";

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState('');

    const searchApi = async () => {
        // console.log(term);

        const response = await yelp.get('/search', {
            params: {//query strings
                limit: 50,
                // term: term
                term,//short hand as api and the variable are same name
                location: "san jose"
            }
        });
        setResults(response.data.businesses);
    };

    return (
        <View style={styles.viewStyle}>
            <SearchBar term={term}
                onTermChange={(newterm) => { setTerm(newterm) }}
                onTermSubmit={searchApi} />{/* shorthand for ->....() => { searchApi() }*/}
            {/* <Icon name="search" size={30} > */}
            <Text >Search Screen</Text>
            {/* </Icon> */}
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