import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
    const filterResultsByPrice = (price) => {
        //price === '$ || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price;
        });

    };
    return (
        <View style={styles.viewStyle}>
            <SearchBar term={term}
                onTermChange={setTerm} //{/* shorthand for ->..(newterm) => { setTerm(newterm) }*/}
                onTermSubmit={() => searchApi(term)} />
            {errorMessage ? <Text >{errorMessage}</Text> : null}
            <Text> We have found {results.length} results</Text>
            <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
            <ResultsList results={filterResultsByPrice('$$')} title="Bit  Pricier" />
            <ResultsList results={filterResultsByPrice('$$$')} title="Big  Spender" />
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